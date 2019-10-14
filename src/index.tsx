import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

import App from './containers/App'

// import { register } from '../src/config/serviceWorker'
import configureStore from './store'

import './config/init'

const { store, persistor } = configureStore()

// register()

const IndexPage = () => (
	<Provider store={store}>
		<PersistGate loading={<h3>Loading</h3>} persistor={persistor}>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</PersistGate>
	</Provider>
)

export default IndexPage
