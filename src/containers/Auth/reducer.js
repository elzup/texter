// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'
import { Auth } from '../../types'

export type State = Auth

export const initialState: State = {
	id: '',
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.SAVE_LOGIN:
			return {
				...state,
			}
		default:
			return state
	}
}
