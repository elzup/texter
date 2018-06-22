// @flow
export const SET_VALUE: 'ValueById/SET_VALUE' = 'ValueById/SET_VALUE'

export const Actions = {
	SET_VALUE,
}

export type SetValue = {
	type: typeof SET_VALUE,
	key: string,
	value: string,
}

export type Action = SetValue
