// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

type Props = {
	text: string,
	handleLike: ({ text: string }) => void,
	handleChange: ({ text: string }) => void,
}

const sampleLink = {
	link1:
		'/#/日記%202018-(日付)%0A----%0A{出来事:[いつ:朝|昼|%08夜]%20-%20(内容)%0A}%0A----',
	link2:
		'/#/Hello%20my%20name%20is%20(name)[power:.|!|!!|!!!!].%20{comment:I%20love%20[thing:cat|dog|code].}',
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
					<a href={sampleLink.link1}>(ex1</a>
					<a href={sampleLink.link2}>(ex2</a>
					{/*<Button onClick={this.onSubmit}>Save</Button> */}
				</form>
			</Paper>
		)
	}
}

export default textForm
