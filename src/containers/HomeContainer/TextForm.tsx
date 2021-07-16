import { connect } from 'react-redux'
import TextForm from '../../components/TextForm'
import { State } from '../../types'
import * as logics from './logic'
import * as selectors from './selectors'

const ms = (state: State) => {
	return {
		text: selectors.getText(state),
		result: selectors.getResult(state),
	}
}

const conn = connect(ms, {
	updateText: logics.logId,
	handleLike: logics.logId,
	handleCopy: logics.copyShareUrl,
	handleChange: logics.updateText,
})

export default conn(TextForm)
