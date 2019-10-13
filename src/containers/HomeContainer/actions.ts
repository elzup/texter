import { actionCreatorFactory } from 'typescript-fsa'

import { Home, Block } from '../../types'

const actionCreator = actionCreatorFactory()

export const updateHome = actionCreator<Partial<Home>>('updateHome')
export const updateBlocks = actionCreator<Block[]>('updateBlocks')
