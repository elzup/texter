// @flow
import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

type Props = {
	text: string,
	handleCopy: Function,
}

const GeneratedText = (props: Props) => (
	<Paper style={{ padding: '10px', marginTop: '10px' }}>
		<Typography variant="title">Result</Typography>
		<TextField
			id="interval"
			type="text"
			multiline
			disabled
			value={props.text}
			defaultValue={props.text}
			helperText=""
			inputProps={{
				'data-test': 'event-interval-time-input',
				style: { color: 'black', background: '#eee' },
			}}
			data-test="text-input"
			margin="normal"
			fullWidth
		/>
		<Button onClick={props.handleCopy}>Copy</Button>
	</Paper>
)

export default GeneratedText
