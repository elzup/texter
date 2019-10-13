import { connect } from 'react-redux'
import NavBar from '../../components/NavBar'
import { State } from '../../types'
import { getAuth } from '../Auth/selectors'
import { doLogin, doLogout } from '../Firebase/logic'

const ms = (state: State) => ({
	auth: getAuth(state),
})

const conn = connect(
	ms,
	{ doLogin, doLogout },
)

export default conn(NavBar)
