import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const syncStart = actionCreator('syncStart')
export const syncEnd = actionCreator('syncEnd')
