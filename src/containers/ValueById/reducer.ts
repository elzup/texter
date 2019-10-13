import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from './actions'

export type State = { [id: string]: string }

export const initialState: State = {}

export default reducerWithInitialState<State>(initialState)
	.case(actions.setValue, (state, payload) => {
		return {
			...state,
			[payload.key]: payload.value,
		}
	})
	.case(actions.replaceValues, (state, payload) => {
		return payload
	})
