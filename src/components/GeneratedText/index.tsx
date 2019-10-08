// @flow
import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Filter from '@material-ui/icons/Filter'
import Share from '@material-ui/icons/Share'
import ContentPaste from '@material-ui/icons/ContentPaste'

import Title from '../Title'

type Props = {
	text: string,
	handleCopy: Function,
	handleShareTwitter: Function,
}

const GeneratedText = (props: Props) => (
	<Paper>
		<Title text={'Result'} icon={<Filter />} />
		<TextField
			id="interval"
			type="text"
			multiline
			disabled
			value={props.text}
			helperText=""
			inputProps={{
				'data-test': 'event-interval-time-input',
				style: { color: 'black', background: '#eee' },
			}}
			data-test="text-input"
			margin="normal"
			fullWidth
		/>
		<Button variant="outlined" onClick={props.handleCopy}>
			<ContentPaste />
			Copy
		</Button>
		<Button variant="outlined" onClick={props.handleShareTwitter}>
			<Share />
			Tweet
		</Button>
	</Paper>
)

export default GeneratedText
