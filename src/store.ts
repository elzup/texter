import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk'
import reducer from './reducer'

const persistConfig = {
	key: 'primary',
	storage,
}

const setup = () => {
	const middleware = [thunk]
	const enhancers = []

	// eslint-disable-next-line
	const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__

	if (typeof devToolsExtension === 'function') {
		// @ts-ignore
		enhancers.push(devToolsExtension())
	}

	const composer = compose(applyMiddleware(...middleware), ...enhancers)

	const persistedReducer = persistReducer(persistConfig, reducer)
	// @ts-ignore
	const store = createStore(persistedReducer, composer)
	const persistor = persistStore(store)

	return { store, persistor }
}

export default setup
