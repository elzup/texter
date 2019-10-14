import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import LoadContainer from './containers/HomeContainer/LoadContainer'

// import { register } from '../src/config/serviceWorker'
import configureStore from './store'

import './config/init'

const { store, persistor } = configureStore()

// register()

const IndexPage = () => (
	<Provider store={store}>
		<PersistGate loading={<h3>Loading</h3>} persistor={persistor}>
			<LoadContainer />
		</PersistGate>
	</Provider>
)

export default IndexPage
