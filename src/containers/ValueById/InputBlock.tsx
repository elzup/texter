import * as React from 'react'
import { connect, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'

import { State } from '../../types'
import * as selectors from './selectors'
import { saveValue } from './logic'

type OProps = {
	vid: string
	viewLabel?: boolean
}

type Props = {
	vid: string
	viewLabel: boolean
	value: string
}

const InputBlock = (props: Props) => {
	const dispatch = useDispatch()

	return (
		<TextField
			label={props.viewLabel ? props.vid : null}
			InputLabelProps={{
				shrink: true,
			}}
			error={!props.value}
			defaultValue={props.value}
			onChange={e => {
				dispatch(saveValue({ vid: props.vid, value: e.target.value }))
			}}
		/>
	)
}

const ms = (state: State, op: OProps) => ({
	vid: op.vid,
	viewLabel: op.viewLabel || false,
	value: selectors.getValue(state, op.vid),
})

const conn = connect(
	ms,
	{},
)

export default conn(InputBlock)
