// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'

import type { State } from '../../types'
import * as logics from './logic'
import * as selectors from './selectors'

type OProps = {
	vid: string,
	options: string[],
}

type Props = {
	vid: string,
	options: string[],
	value: string,
	saveValue: typeof logics.saveValue,
}

class SelectBlock extends React.Component<Props> {
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
				select
				label={props.vid}
				SelectProps={{
					native: true,
				}}
				error={!props.value}
				inputRef={ref => {
					this.vRef = ref
				}}
				InputLabelProps={{
					shrink: true,
				}}
				onChange={e => {
					props.saveValue({ vid: props.vid, value: e.target.value })
				}}
			>
				{props.options.map((text, i) => (
					<option key={i} value={text}>
						{text}
					</option>
				))}
			</TextField>
		)
	}
}

const ms = (state: State, op: OProps) => ({
	vid: op.vid,
	options: op.options,
	value: selectors.getValue(state, op.vid),
})

const conn = connect(
	ms,
	{
		saveValue: logics.saveValue,
	},
)

export default conn(SelectBlock)
