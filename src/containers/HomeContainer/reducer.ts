import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Home } from '../../types'
import * as actions from './actions'

export type State = Home

export const initialState: State = {
	text: '',
	result: { ok: false, message: 'No message', hilights: [] },
	generatedText: '',
	shareUrl: '',
}

export default reducerWithInitialState<State>(initialState)
	.case(actions.updateBlocks, (state, blocks) => {
		return {
			...state,
			result: {
				ok: true,
				blocks,
			},
		}
	})
	.case(actions.updateHome, (state, home) => {
		return {
			...state,
			...home,
		}
	})
