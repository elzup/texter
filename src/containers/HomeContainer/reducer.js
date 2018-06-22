// @flow
import type { Action, Home } from '../../types'
import { Actions } from './actionTypes'

export type State = Home

export const initialState: State = {
	text: '',
	result: { ok: false, blocks: [] },
	generatedText: '',
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_GENERATED_TEXT:
			return {
				...state,
				generatedText: action.generatedText,
			}

		case Actions.UPDATE_BLOCKS:
			return {
				...state,
				result: {
					...state.result,
					blocks: action.blocks,
				},
			}

		case Actions.UPDATE_HOME:
			return action.home

		default:
			return state
	}
}
