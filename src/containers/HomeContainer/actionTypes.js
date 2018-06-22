// @flow
import type { Home, Block } from '../../types'

export const UPDATE_HOME: 'HomeContainer/UPDATE_HOME' =
	'HomeContainer/UPDATE_HOME'
export const UPDATE_BLOCKS: 'HomeContainer/UPDATE_BLOCKS' =
	'HomeContainer/UPDATE_BLOCKS'
export const UPDATE_GENERATED_TEXT: 'HomeContainer/UPDATE_GENERATED_TEXT' =
	'HomeContainer/UPDATE_GENERATED_TEXT'

export const Actions = {
	UPDATE_HOME,
	UPDATE_BLOCKS,
	UPDATE_GENERATED_TEXT,
}

export type UpdateHome = {
	type: typeof UPDATE_HOME,
	home: Home,
}

export type UpdateBlocks = {
	type: typeof UPDATE_BLOCKS,
	blocks: Block[],
}

export type UpdateGeneratedText = {
	type: typeof UPDATE_GENERATED_TEXT,
	generatedText: string,
}

export type Action = UpdateHome | UpdateBlocks | UpdateGeneratedText
