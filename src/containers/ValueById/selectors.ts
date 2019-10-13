import { State } from '../../types'

export const getValue = (state: State, vid: string) => {
	if (!state.ValuesTable.vids.includes(vid)) {
		return ''
	}
	return state.ValueById[vid] || ''
}
