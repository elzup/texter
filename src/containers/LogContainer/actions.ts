import { actionCreatorFactory } from 'typescript-fsa'

import { Log } from '../../types'

const actionCreator = actionCreatorFactory()

export const receiveLog = actionCreator<Log>('receiveLog')
export const receiveLogs = actionCreator<Log[]>('receiveLogs')
