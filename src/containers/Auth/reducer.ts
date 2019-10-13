import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Auth } from '../../types'
import * as actions from './actions'

export type State = Auth

export const initialState: State = {
	logined: false,
}

export default reducerWithInitialState<State>(initialState).case(
	actions.saveLogin,
	(state, payload) => {
		return payload
	},
)
