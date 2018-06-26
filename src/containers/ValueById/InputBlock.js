// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'

import type { State } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'
import * as selectors from './selectors'

type OProps = {
	vid: string,
	viewLabel?: boolean,
}

type Props = {
	vid: string,
	viewLabel: boolean,
	value: string,
	saveValue: typeof logics.saveValue,
}

class InputBlock extends React.Component<Props> {
	vRef: ?HTMLInputElement

	componentDidMount() {
		if (this.vRef) {
			this.vRef.value = this.props.value
		}
	}
	componentWillReceiveProps(p: Props) {
		if (this.vRef) {
			this.vRef.value = p.value
		}
	}

	render() {
		const { props } = this
		return (
			<TextField
				label={props.viewLabel ? props.vid : null}
				inputRef={ref => {
					this.vRef = ref
				}}
				InputLabelProps={{
					shrink: true,
				}}
				error={!props.value}
				onChange={e => {
					props.saveValue({ vid: props.vid, value: e.target.value })
				}}
			/>
		)
	}
}

const ms = (state: State, op: OProps) => ({
	vid: op.vid,
	viewLabel: op.viewLabel || false,
	value: selectors.getValue(state, op.vid),
})

const conn = connect(
	ms,
	{
		saveValue: logics.saveValue,
	},
)

export default conn(InputBlock)
