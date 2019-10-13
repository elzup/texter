import * as React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'

import { State } from '../../types'
import * as logics from './logic'
import * as selectors from './selectors'

type OProps = {
	vid: string
	options: string[]
}

type Props = {
	vid: string
	options: string[]
	value: string
	saveValue: typeof logics.saveValue
}

const SelectBlock = (props: Props) => (
	<TextField
		select
		label={props.vid}
		SelectProps={{
			native: true,
		}}
		error={!props.value}
		defaultValue={props.value}
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
