// @flow
import { SET_VALUE, REPLACE_VALUES } from './actionTypes'
import type { SetValue, ReplaceValues } from './actionTypes'

export function setValue(key: string, value: string): SetValue {
	return {
		type: SET_VALUE,
		key,
		value,
	}
}
export function replaceValues(state: { [id: string]: string }): ReplaceValues {
	return {
		type: REPLACE_VALUES,
		state,
	}
}
