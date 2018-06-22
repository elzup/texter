// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, type RouterHistory } from 'react-router-dom'
import TextForm from '../../components/TextForm'

import type { State } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type OProps = {
	text: string,
	history: RouterHistory,
}

type Props = {
	text: string,
	history: RouterHistory,
	logId: typeof logics.logId,
	handleLike: Function,
	handleCopy: Function,
}

const Container = (props: Props) => (
	<TextForm
		{...props}
		handleChange={({ text }) => {
			props.history.push(encodeURI(text))
		}}
	/>
)

const ms = (state: State, op: OProps) => {
	return { text: op.text, history: op.history }
}

const conn = connect(ms, {
	handleLike: logics.logId,
	handleCopy: logics.copyShareUrl,
})

export default withRouter(conn(Container))
