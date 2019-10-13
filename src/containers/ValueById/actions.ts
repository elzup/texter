import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const setValue = actionCreator<{ key: string; value: string }>(
	'setValue',
)

export const replaceValues = actionCreator<{ [id: string]: string }>(
	'replaceValues',
)
