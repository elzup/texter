import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const updateVids = actionCreator<string[]>('updateVids')
