// @flow
import type { Auth } from '../../types'

import { SAVE_LOGIN } from './actionTypes'
import type { SaveLogin } from './actionTypes'

export function saveLogin(auth: Auth): SaveLogin {
	return {
		type: SAVE_LOGIN,
		auth,
	}
}
