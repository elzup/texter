// @flow
import { SAVE_LOGIN } from './actionTypes'
import type { SaveLogin } from './actionTypes'

export function saveLogin(): SaveLogin {
	return {
		type: SAVE_LOGIN,
	}
}
