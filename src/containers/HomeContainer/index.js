// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { type Match, type RouterHistory } from 'react-router-dom'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import NavBar from '../NavBarContainer'
import TextForm from './TextForm'
import ResultContainer from './ResultContainer'

import type { State } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type OProps = {
	match: Match,
	history: RouterHistory,
}

type Props = {
	text: string,
	updateText: typeof logics.updateText,
}

class Container extends React.Component<Props> {
	componentWillReceiveProps(nextProps) {
		this.props.updateText({ text: nextProps.text })
	}
	render() {
		const { props } = this
		// props.history.push({ search: `?day=${day}` })
		return (
			<div>
				<NavBar />
				<Grid container justify="center" spacing={16}>
					<Grid item xs={12} md={10}>
						<TextForm text={props.text} />
						<Typography variant="title">{props.text}</Typography>
						<ResultContainer />
					</Grid>
				</Grid>
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	const text = op.match.params.text || ''
	return { text }
}

const conn = connect(ms, { updateText: logics.updateText })

export default conn(Container)
