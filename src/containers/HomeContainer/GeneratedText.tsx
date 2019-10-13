import { connect } from 'react-redux'

import GeneratedText from '../../components/GeneratedText'
import { State } from '../../types'
import * as logics from './logic'

const ms = (state: State) => {
	return { text: state.HomeContainer.generatedText }
}

const conn = connect(
	ms,
	{
		handleCopy: logics.copyGeneratedText,
		handleShareTwitter: logics.openShareTwitter,
	},
)

export default conn(GeneratedText)
