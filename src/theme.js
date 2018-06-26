// @flow

import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
// import lime from '@material-ui/core/colors/lime'

const theme = createMuiTheme({
	palette: {
		primary: { ...indigo, main: '#5C6BC0' },
		error: orange,
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
	overrides: {
		MuiPaper: {
			root: {
				padding: '10px',
				marginTop: '10px',
			},
		},
		MuiSvgIcon: {
			root: {
				// margin: '5px',
			},
		},
	},
})
export default theme
