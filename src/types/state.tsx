import { State as Auth } from '../containers/Auth/reducer'
import { State as HomeContainer } from '../containers/HomeContainer/reducer'
import { State as LogContainer } from '../containers/LogContainer/reducer'
import { State as Network } from '../containers/Network/reducer'
import { State as ValueById } from '../containers/ValueById/reducer'
import { State as ValuesTable } from '../containers/ValuesTable/reducer'

export type State = {
	Auth: Auth
	HomeContainer: HomeContainer
	LogContainer: LogContainer
	Network: Network
	ValueById: ValueById
	ValuesTable: ValuesTable
}
