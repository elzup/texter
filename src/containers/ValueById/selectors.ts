// @flow
import type { State } from '../../types'

export const getValue = (state: State, vid: string) => {
	if (state.ValuesTable.vids.indexOf(vid) === -1) {
		return ''
	}
	return state.ValueById[vid] || ''
}
