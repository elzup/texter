// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

type RehydrateAction = {
	type: 'persist/REHYDRATE',
	payload: _State,
}

export type State = _State
export type Action = _Action | RehydrateAction

export type Reducer = (state: State, action: Action) => State
export type Reducers = {
	[key: string]: Reducer,
}

export type GetState = () => State

export type ThunkAction = (
	dispatch: ReduxDispatch<*>,
	getState: GetState,
) => void | Promise<void>

type ThunkDispatch<A> = (ta: ThunkAction) => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>

export type BlockType = 'text' | 'input' | 'select'

export type TextBlock = {
	type: 'text',
	text: string,
}

export type InputBlock = {
	type: 'input',
	name: string,
	vid: string,
}

export type SelectBlock = {
	type: 'select',
	name: string,
	texts: string[],
	vid: string,
}

export type RepeatBlock = {
	type: 'repeat',
	name: string,
	count: number,
	blocks: Block[],
}

export type Block = TextBlock | InputBlock | SelectBlock | RepeatBlock

export type ParseResult = {
	ok: boolean,
	blocks: Block[],
}

export type Home = {
	text: string,
	result: ParseResult,
}

export type Log = {
	id: string,
	createdAt: string,
}
