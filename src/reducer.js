// @flow
import { combineReducers } from './config'
import HomeContainer from './containers/HomeContainer/reducer'
import LogContainer from './containers/LogContainer/reducer'
import Network from './containers/Network/reducer'
import ValueById from './containers/ValueById/reducer'

export default combineReducers({
	HomeContainer,
	LogContainer,
	Network,
	ValueById,
})
