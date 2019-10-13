import _ from 'lodash'
import { ThunkAction, Block } from '../../types'
import * as homeActions from '../HomeContainer/actions'
import * as valueTableLogics from '../ValuesTable/logic'
import * as actions from './actions'

function fillText(
	blocks: Block[],
	valueById: { [id: string]: string },
	prefix = '',
): string {
	return blocks
		.map(b => {
			switch (b.type) {
				case 'text':
					return b.text
				case 'input':
				case 'select':
					return valueById[prefix + b.vid]
				case 'repeat':
					return _.range(b.count)
						.map(i => fillText(b.blocks, valueById, `${b.name}${i}-`))
						.join('')
				default:
					return ''
			}
		})
		.join('')
}

export function calcText(): ThunkAction {
	return async (dispatch, getState) => {
		const { result } = getState().HomeContainer

		if (result.ok) {
			const { blocks } = result
			const valueById = getState().ValueById
			const generatedText = fillText(blocks, valueById)

			dispatch(homeActions.updateHome({ generatedText }))
		} else {
			dispatch(homeActions.updateHome({ generatedText: '' }))
		}
	}
}

export function saveValue({
	vid,
	value,
}: {
	vid: string
	value: string
}): ThunkAction {
	return async dispatch => {
		await dispatch(valueTableLogics.addKeys([vid]))
		await dispatch(actions.setValue({ key: vid, value }))
		dispatch(calcText())
	}
}
