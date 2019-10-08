// @flow
export const UPDATE_VIDS: 'ValuesTable/UPDATE_VIDS' = 'ValuesTable/UPDATE_VIDS'

export const Actions = {
	UPDATE_VIDS,
}

export type UpdateVids = {
	type: typeof UPDATE_VIDS,
	vids: string[],
}

export type Action = UpdateVids
