// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { type Match, type RouterHistory } from 'react-router-dom'
// import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import NavBar from '../NavBarContainer'
import TextForm from './TextForm'
import BlocksContainer from './BlocksContainer'
import GeneratedText from './GeneratedText'
import ValueTable from '../ValuesTable'
import BlockRay from '../../components/BlockRay'

import type { State, ParseResult } from '../../types'
import * as selectors from './selectors'
import * as logics from './logic'

type OProps = {
	match: Match,
	history: RouterHistory,
}

type Props = {
	text: string,
	updateText: typeof logics.updateText,
	result: ParseResult,
}

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.updateText({ text: this.props.text })
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.text !== nextProps.text) {
			this.props.updateText({ text: nextProps.text })
		}
	}
	render() {
		const { props } = this
		// props.history.push({ search: `?day=${day}` })
		return (
			<div>
				<NavBar />
				<Grid container justify="center" style={{ marginBottom: '100px' }}>
					<Grid item xs={12} md={10}>
						<TextForm text={props.text} />
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
	const text = op.match.params.text || ''
	return { text, result: selectors.getResult(state) }
}

const conn = connect(
	ms,
	{ updateText: logics.updateText },
)

export default conn(Container)
