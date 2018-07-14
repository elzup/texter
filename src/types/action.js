// @flow
import type { Action as AuthAction } from '../containers/Auth/actionTypes'
import type { Action as HomeContainerAction } from '../containers/HomeContainer/actionTypes'
import type { Action as LogContainerAction } from '../containers/LogContainer/actionTypes'
import type { Action as NetworkAction } from '../containers/Network/actionTypes'
import type { Action as ValueByIdAction } from '../containers/ValueById/actionTypes'
import type { Action as ValuesTableAction } from '../containers/ValuesTable/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action =
	| ReduxInitAction
	| AuthAction
	| HomeContainerAction
	| LogContainerAction
	| NetworkAction
	| ValueByIdAction
	| ValuesTableAction
