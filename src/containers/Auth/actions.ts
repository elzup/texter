import { actionCreatorFactory } from 'typescript-fsa'
import { Auth } from '../../types'

const actionCreator = actionCreatorFactory()

export const saveLogin = actionCreator<Auth>('saveLogin')
