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
		const generatedText = fillText('', blocks, valueById)
		dispatch(homeActions.updateGeneratedText(generatedText))
	}
}

function fillText(
	text: string,
	blocks: Block[],
	valueById: { [vid: string]: string },
): string {
	return 'hoge'
}
