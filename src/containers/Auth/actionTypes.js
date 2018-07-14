// @flow
export const SAVE_LOGIN: 'Auth/SAVE_LOGIN' = 'Auth/SAVE_LOGIN'

export const Actions = {
	SAVE_LOGIN,
}

export type SaveLogin = {
	type: typeof SAVE_LOGIN,
}

export type Action = SaveLogin
