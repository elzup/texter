// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../src/theme'

import App from '../src/containers/App'

import registerServiceWorker from '../src/config/registerServiceWorker'
import configureStore from '../src/store'

import '../src/config/init'

const { store, persistor } = configureStore()
registerServiceWorker()

export default () => (
	<Provider store={store}>
		<PersistGate loading={<h3>Loading</h3>} persistor={persistor}>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</PersistGate>
	</Provider>
)
