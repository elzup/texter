// @flow

import type { ThunkAction, Block } from '../../types'
import * as actions from './actions'
import * as homeActions from '../HomeContainer/actions'

export function saveValue({
	vid,
	value,
}: {
	vid: string,
	value: string,
}): ThunkAction {
	return async (dispatch, getState) => {
		await dispatch(actions.setValue(vid, value))
		dispatch(calcText())
	}
}

export function calcText(): ThunkAction {
	return async (dispatch, getState) => {
		const { blocks } = getState().HomeContainer.result
		const valueById = getState().ValueById
		const generatedText = fillText(blocks, valueById)
		dispatch(homeActions.updateGeneratedText(generatedText))
	}
}

function fillText(
	blocks: Block[],
	valueById: { [vid: string]: string },
	prefix: string = '',
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
					return [...Array(b.count).keys()]
						.map(i => fillText(b.blocks, valueById, `${b.name}-${i}-`))
						.join('')
				default:
					return ''
			}
		})
		.join('')
}
