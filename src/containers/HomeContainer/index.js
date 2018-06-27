// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { type Match, type RouterHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import NavBar from '../NavBarContainer'
import TextForm from './TextForm'
import BlocksContainer from './BlocksContainer'
import GeneratedText from './GeneratedText'
import ValueTable from '../ValuesTable'
import BlockRay from '../../components/BlockRay'

import type { State, ParseResult } from '../../types'
import * as selectors from './selectors'
import { calcText } from '../ValueById/logic'

type OProps = {
	match: Match,
	history: RouterHistory,
}

type Props = {
	result: ParseResult,
	calcText: typeof calcText,
}

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.calcText()
	}
	render() {
		const { props } = this
		return (
			<div>
				<NavBar />
				<Grid container justify="center" style={{ marginBottom: '100px' }}>
					<Grid item xs={12} md={10}>
						<TextForm />
						<BlockRay blocks={props.result.blocks} />
						<BlocksContainer blocks={props.result.blocks} prefix="" />
						<GeneratedText />
						<ValueTable />
					</Grid>
				</Grid>
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	return { result: selectors.getResult(state) }
}

const conn = connect(
	ms,
	{
		calcText,
	},
)

export default conn(Container)
