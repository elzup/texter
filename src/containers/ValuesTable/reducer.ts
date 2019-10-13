import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from './actions'

export type State = {
	vids: string[]
}

export const initialState: State = {
	vids: [],
}

export default reducerWithInitialState<State>(initialState).case(
	actions.updateVids,
	(state, vids) => {
		return { ...state, vids }
	},
)
