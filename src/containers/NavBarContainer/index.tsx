// @flow

import { connect } from 'react-redux'
import NavBar from '../../components/NavBar'
import type { State } from '../../types'
import { getAuth } from '../Auth/selectors'
import { doLogin } from '../Firebase/logic'

const ms = (state: State) => ({
	auth: getAuth(state),
})

const conn = connect(
	ms,
	{ doLogin },
)

export default conn(NavBar)
