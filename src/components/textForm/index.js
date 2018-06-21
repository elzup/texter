// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

type Props = {
	id: string,
	handleLike: ({ id: string }) => void,
	handleChange: ({ id: string }) => void,
}

class textForm extends React.Component<Props> {
	textRef: ?HTMLInputElement

	onSubmit = () => {
		if (!this.textRef) {
			return
		}
		this.props.handleLike({ id: this.textRef.value })
	}

	onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
		this.props.handleChange({ id: e.target.value })
	}

	render() {
		const { props } = this
		return (
			<form action="" onSubmit={this.onSubmit}>
				<TextField
					id="interval"
					label="ID"
					multiline
					rows="4"
					type="text"
					defaultValue={props.id}
					inputRef={r => {
						this.textRef = r
					}}
					onChange={this.onChange}
					inputProps={{ 'data-test': 'event-interval-time-input' }}
					data-test="id-input"
				/>
				<Button onClick={this.onSubmit}>Like</Button>
			</form>
		)
	}
}

export default textForm
