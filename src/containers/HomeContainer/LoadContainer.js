// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import type { State } from '../../types'
import * as logics from './logic'

type OProps = {
	location: Location,
}

type Props = {
	text: string,
	updateTextAndRedirect: typeof logics.updateTextAndRedirect,
}

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.updateTextAndRedirect({ text: this.props.text })
	}

	render() {
		return <div />
	}
}

const ms = (state: State, op: OProps) => {
	const parsed = queryString.parse(op.location.search)
	const text = parsed.text || ''
	return { text }
}

const conn = connect(
	ms,
	{ updateTextAndRedirect: logics.updateTextAndRedirect },
)

export default conn(Container)
