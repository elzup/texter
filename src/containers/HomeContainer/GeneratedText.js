// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

import type { State } from '../../types'

type OProps = {}

type Props = {
	text: string,
}

class GeneratedText extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>
				<Typography variant="body1">{props.text}</Typography>
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	return { text: state.HomeContainer.generatedText }
}

const conn = connect(ms, {})

export default conn(GeneratedText)
