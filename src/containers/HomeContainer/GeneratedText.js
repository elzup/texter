// @flow
import { connect } from 'react-redux'

import GeneratedText from '../../components/GeneratedText'

import type { State } from '../../types'

const ms = (state: State) => {
	return { text: state.HomeContainer.generatedText }
}

const conn = connect(ms, {})

export default conn(GeneratedText)
