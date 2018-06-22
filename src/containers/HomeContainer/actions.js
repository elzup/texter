// @flow
import type { Home, Block } from '../../types'

import {
	UPDATE_HOME,
	UPDATE_BLOCKS,
	UPDATE_GENERATED_TEXT,
} from './actionTypes'
import type {
	UpdateHome,
	UpdateBlocks,
	UpdateGeneratedText,
} from './actionTypes'

export function updateHome(home: Home): UpdateHome {
	return {
		type: UPDATE_HOME,
		home,
	}
}
export function updateBlocks(blocks: Block[]): UpdateBlocks {
	return {
		type: UPDATE_BLOCKS,
		blocks,
	}
}
export function updateGeneratedText(
	generatedText: string,
): UpdateGeneratedText {
	return {
		type: UPDATE_GENERATED_TEXT,
		generatedText,
	}
}
