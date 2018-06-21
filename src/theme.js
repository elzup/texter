// @flow

import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
// import lime from '@material-ui/core/colors/lime'

const theme = createMuiTheme({
	palette: {
		primary: { ...indigo, main: "#5C6BC0" },
		// secondary: lime,
	},
	typography: {
		display1: {
			padding: '20px',
		},
		title: {
			padding: '10px',
		},
	},
	paper: {
		padding: '10px',
	},
	tableCell: {
		textAlign: 'center',
	},
})
export default theme
