// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

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
			<Paper style={{ marginTop: '10px', padding: '10px' }}>
				<form action="" onSubmit={this.onSubmit}>
					<Typography variant="title">Template</Typography>
					<TextField
						id="interval"
						type="text"
						multiline
						rows={3}
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
					{/*<Button onClick={this.onSubmit}>Save</Button> */}
				</form>
			</Paper>
		)
	}
}

export default textForm
