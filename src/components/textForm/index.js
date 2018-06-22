// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

type Props = {
	text: string,
	handleLike: ({ text: string }) => void,
	handleChange: ({ text: string }) => void,
}

class textForm extends React.Component<Props> {
	textRef: ?HTMLInputElement

	onSubmit = () => {
		if (!this.textRef) {
			return
		}
		this.props.handleLike({ text: this.textRef.value })
	}

	onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
		this.props.handleChange({ text: e.target.value })
	}

	componentWillReceiveProps(nextProps: Props) {
		if (!this.textRef) {
			return
		}
		this.textRef.value = nextProps.text
	}

	render() {
		const { props } = this
		return (
			<form action="" onSubmit={this.onSubmit}>
				<TextField
					id="interval"
					label="template"
					multiline
					rows="10"
					type="text"
					defaultValue={props.text}
					inputRef={r => {
						this.textRef = r
					}}
					helperText=""
					onChange={this.onChange}
					inputProps={{ 'data-test': 'event-interval-time-input' }}
					data-test="text-input"
					fullWidth
				/>
				<Button onClick={this.onSubmit}>Like</Button>
			</form>
		)
	}
}

export default textForm
