// @flow
import { SET_VALUE } from './actionTypes'
import type { SetValue } from './actionTypes'

export function setValue(key: string, value: string): SetValue {
	return {
		type: SET_VALUE,
		key,
		value,
	}
}
