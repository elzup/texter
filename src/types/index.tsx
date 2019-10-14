import { Action, AnyAction } from 'redux'
import { ThunkAction as _ThunkAction } from 'redux-thunk'
import { State as _State } from './state'

export type State = _State

export type GetState = () => State

export type ThunkAction = _ThunkAction<
	void | Promise<void>,
	State,
	undefined,
	AnyAction | Action<unknown>
>

type ThunkDispatch<T> = (ta: ThunkAction) => T

export type BlockType = 'text' | 'input' | 'select'

export type TextBlock = {
	type: 'text'
	text: string
}

export type InputBlock = {
	type: 'input'
	name: string
	vid: string
}

export type SelectBlock = {
	type: 'select'
	name: string
	texts: string[]
	vid: string
}

export type RepeatBlock = {
	type: 'repeat'
	name: string
	count: number
	blocks: Block[]
}

export type Block = TextBlock | InputBlock | SelectBlock | RepeatBlock

export type ParseResultSuccess = {
	ok: true
	blocks: Block[]
}

export type ParseResultFail = {
	ok: false
	message: string
	hilights: number[]
}

export type ParseResult = ParseResultSuccess | ParseResultFail

export type Home = {
	text: string
	result: ParseResult
	generatedText: string
	shareUrl: string
}

export type Log = {
	id: string
	createdAt: string
}
