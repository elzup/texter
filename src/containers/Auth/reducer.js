// @flow
import type { Action, Auth } from '../../types'
import { Actions } from './actionTypes'

export type State = Auth

export const initialState: State = {
	logined: false,
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.SAVE_LOGIN:
			return action.auth
		default:
			return state
	}
}
