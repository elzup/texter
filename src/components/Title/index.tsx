import * as React from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
	icon: unknown
	text: string
}

const Title = (props: Props) => (
	<Typography variant="h5" component="h2">
		{props.icon}
		{props.text}
	</Typography>
)

export default Title
