// @flow
import type { State } from '../../types'

export const getValue = (state: State, vid: string) => {
	return state.ValueById[vid] || ''
}
