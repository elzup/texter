import { State } from '../../types'

export function getRehydrated(state: State): boolean {
	const ps: unknown = state

	return ps._persist.rehydrated
}
