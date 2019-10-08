// @flow
import { UPDATE_VIDS } from './actionTypes'
import type { UpdateVids } from './actionTypes'

export function updateVids(vids: string[]): UpdateVids {
	return {
		type: UPDATE_VIDS,
		vids,
	}
}
