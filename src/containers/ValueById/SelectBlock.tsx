import * as React from 'react'
import { connect, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'

import { State } from '../../types'
import * as selectors from './selectors'
import { saveValue } from './logic'

type OProps = {
	vid: string
	options: string[]
}

type Props = {
	vid: string
	options: string[]
	value: string
}

const SelectBlock = (props: Props) => {
	const dispatch = useDispatch()

	return (
		<TextField
			select
			label={props.vid}
			SelectProps={{
				native: true,
			}}
			error={!props.value}
			defaultValue={props.value}
			onChange={e => {
				dispatch(saveValue({ vid: props.vid, value: e.target.value }))
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

const ms = (state: State, op: OProps) => ({
	vid: op.vid,
	options: op.options,
	value: selectors.getValue(state, op.vid),
})

const conn = connect(
	ms,
	{},
)

export default conn(SelectBlock)
