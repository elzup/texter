// @flow

import type { State } from '../../types'

export function getText(state: State) {
	return state.HomeContainer.text
}

export function getResult(state: State) {
	return state.HomeContainer.result
}
