// @flow
import type { Home, Block } from '../../types'

import { UPDATE_HOME, UPDATE_BLOCKS } from './actionTypes'
import type { UpdateHome, UpdateBlocks } from './actionTypes'

export function updateHome(home: $Shape<Home>): UpdateHome {
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
