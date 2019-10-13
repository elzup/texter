import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from './actions'

export type State = {
	isLoading: boolean
}

export const initialState: State = {
	isLoading: false,
}

export default reducerWithInitialState<State>(initialState)
	.case(actions.syncStart, () => ({ isLoading: true }))
	.case(actions.syncEnd, () => ({ isLoading: true }))
