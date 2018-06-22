// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = { [id: string]: string }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.SET_VALUE:
			return {
				...state,
				[action.key]: action.value,
			}

		default:
			return state
	}
}
