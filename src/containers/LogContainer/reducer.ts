import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Log } from '../../types'
import * as actions from './actions'

export type State = Log[]

export const initialState: State = []

export default reducerWithInitialState<State>(initialState)
	.case(actions.receiveLog, (state, log) => {
		return [...state, log]
	})
	.case(actions.receiveLogs, (state, logs) => {
		return logs
	})
