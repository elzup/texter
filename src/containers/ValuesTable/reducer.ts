// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = {
	vids: string[],
}

export const initialState: State = {
	vids: [],
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_VIDS:
			return {
				...state,
				vids: action.vids,
			}

		default:
			return state
	}
}
