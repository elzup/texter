// @flow
export const SET_VALUE: 'ValueById/SET_VALUE' = 'ValueById/SET_VALUE'
export const REPLACE_VALUES: 'ValueById/REPLACE_VALUES' =
	'ValueById/REPLACE_VALUES'

export const Actions = {
	SET_VALUE,
	REPLACE_VALUES,
}

export type SetValue = {
	type: typeof SET_VALUE,
	key: string,
	value: string,
}

export type ReplaceValues = {
	type: typeof REPLACE_VALUES,
	state: { [id: string]: string },
}

export type Action = SetValue | ReplaceValues
