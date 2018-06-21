// @flow
import type { Action, Home } from '../../types'
import { Actions } from './actionTypes'

export type State = Home

export const initialState: State = {
	text: '',
	result: { ok: false, blocks: [] },
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_HOME:
			return action.home

		default:
			return state
	}
}
