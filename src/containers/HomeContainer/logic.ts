import copy from 'copy-text-to-clipboard'
import ShareUrl from 'share-url'

import moment from 'moment'
import _ from 'lodash'
import { ThunkAction, Block } from '../../types'
import parser from '../../parser'
import * as valueLogics from '../ValueById/logic'
import * as logActions from '../LogContainer/actions'
import * as logSelectors from '../LogContainer/selectors'
import * as actions from './actions'
import * as selectors from './selectors'

const toLoadUrl = (text: string) => {
	const { origin } = document.location

	return `${origin}/#/load?text=${encodeURIComponent(text)}`
}

function setIds(blocks: Block[], prefix = ''): Block[] {
	return blocks.map(
		(v): Block => {
			if (v.type === 'repeat') {
				return { ...v, blocks: setIds(v.blocks, prefix + v.name), count: 1 }
			} else if (v.type === 'select') {
				// TODO: help
				return { type: 'select', name: v.name, texts: v.texts, vid: v.name }
			} else if (v.type === 'input') {
				return { ...v, vid: v.name }
			}
			return v
		},
	)
}
export function updateText({ text }: { text: string }): ThunkAction {
	return async dispatch => {
		const result = parser(text)

		if (result.ok) {
			const shareUrl = toLoadUrl(text)

			await dispatch(
				actions.updateHome({
					text,
					result: { ...result, blocks: setIds(result.blocks) },
					shareUrl,
				}),
			)
			await dispatch(valueLogics.calcText())
		} else {
			await dispatch(
				actions.updateHome({ text, result, shareUrl: '', generatedText: '' }),
			)
		}
	}
}

export function updateTextAndRedirect({ text }: { text: string }): ThunkAction {
	return async dispatch => {
		await dispatch(updateText({ text }))
		document.location.href = '/'
	}
}

export function countChange({
	name,
	count,
}: {
	name: string
	count: number
}): ThunkAction {
	return async (dispatch, getState) => {
		const result = selectors.getResult(getState())

		if (!result.ok) {
			return
		}
		const blocks = result.blocks.map(b => {
			if (b.type === 'repeat' && b.name === name) {
				return { ...b, count }
			}
			return b
		})

		await dispatch(actions.updateBlocks(blocks))
		dispatch(valueLogics.calcText())
	}
}

export function copyGeneratedText(): ThunkAction {
	return async (dispatch, getState) => {
		const text = getState().HomeContainer.generatedText

		copy(text)
	}
}

export function logId({ id }: { id: string }): ThunkAction {
	return async (dispatch, getState) => {
		const logs = logSelectors.getLogs(getState())

		_.remove(logs, log => log.id === id)
		const log = {
			id,
			createdAt: moment().format(),
		}

		await dispatch(logActions.receiveLogs([...logs, log]))
	}
}

export function openShareTwitter(): ThunkAction {
	return async (dispatch, getState) => {
		const { shareUrl, generatedText } = getState().HomeContainer

		const url = ShareUrl.twitter({
			text: generatedText,
			url: shareUrl,
			hashtags: 'texter',
		})

		window.open(url)
	}
}

export function copyShareUrl(): ThunkAction {
	return async (dispatch, getState) => {
		copy(getState().HomeContainer.shareUrl)
	}
}
