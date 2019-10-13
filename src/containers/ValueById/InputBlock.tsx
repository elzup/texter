import * as React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'

import { State } from '../../types'
import * as logics from './logic'
import * as selectors from './selectors'

type OProps = {
	vid: string
	viewLabel?: boolean
}

type Props = {
	vid: string
	viewLabel: boolean
	value: string
	saveValue: typeof logics.saveValue
}

const InputBlock = (props: Props) => (
	<TextField
		label={props.viewLabel ? props.vid : null}
		InputLabelProps={{
			shrink: true,
		}}
		error={!props.value}
		defaultValue={props.value}
		onChange={e => {
			props.saveValue({ vid: props.vid, value: e.target.value })
		}}
	/>
)

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
