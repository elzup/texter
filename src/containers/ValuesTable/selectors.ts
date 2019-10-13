import { State } from '../../types'

export const getVids = (state: State) => {
	return state.ValuesTable.vids
}
