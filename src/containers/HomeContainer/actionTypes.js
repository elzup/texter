// @flow
import type { Home, Block } from '../../types'

export const UPDATE_HOME: 'HomeContainer/UPDATE_HOME' =
	'HomeContainer/UPDATE_HOME'
export const UPDATE_BLOCKS: 'HomeContainer/UPDATE_BLOCKS' =
	'HomeContainer/UPDATE_BLOCKS'

export const Actions = {
	UPDATE_HOME,
	UPDATE_BLOCKS,
}

export type UpdateHome = {
	type: typeof UPDATE_HOME,
	home: $Shape<Home>,
}

export type UpdateBlocks = {
	type: typeof UPDATE_BLOCKS,
	blocks: Block[],
}

export type Action = UpdateHome | UpdateBlocks
