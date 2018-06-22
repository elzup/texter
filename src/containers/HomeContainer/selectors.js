// @flow
import type { State, RepeatBlock } from '../../types'

export function getText(state: State) {
	return state.HomeContainer.text
}

export function getResult(state: State) {
	return state.HomeContainer.result
}

export function getFindByName(state: State): { [name: string]: RepeatBlock } {
	const blocks = state.HomeContainer.result.blocks
	const repeatBlocks: any = blocks.filter(v => v.type === 'repeat')
	return repeatBlocks.reduce((p, c) => ({ ...p, [c.name]: c }), {})
}
