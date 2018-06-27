// @flow
import _ from 'lodash'
import moment from 'moment'
import copy from 'copy-text-to-clipboard'
import ShareUrl from 'share-url'

import type { ThunkAction, Block } from '../../types'
import parser from '../../parser'
import * as actions from './actions'
import * as logActions from '../LogContainer/actions'
import * as logSelectors from '../LogContainer/selectors'
import * as valueLogics from '../ValueById/logic'
import * as selectors from './selectors'

const toLoadUrl = (text: string) => {
	const { origin } = document.location
	return `${origin}/#/load?text=${encodeURIComponent(text)}`
}

export function updateText({ text }: { text: string }): ThunkAction {
	return async (dispatch, getState) => {
		const result0 = parser(text)
		const result = { ...result0, blocks: setIds(result0.blocks) }
		const shareUrl = toLoadUrl(text)

		await dispatch(actions.updateHome({ text, result, shareUrl }))
		await dispatch(valueLogics.calcText())
	}
}

export function updateTextAndRedirect({ text }: { text: string }): ThunkAction {
	return async (dispatch, getState) => {
		await dispatch(updateText({ text }))
		document.location.href = '/'
	}
}
function setIds(blocks: Block[], prefix = ''): Block[] {
	return blocks.map((v, i) => {
		if (v.type === 'repeat') {
			return { ...v, blocks: setIds(v.blocks, v.name), count: 1 }
		} else if (v.type === 'select') {
			// TODO: help
			return { type: 'select', name: v.name, texts: v.texts, vid: v.name }
		} else if (v.type === 'input') {
			return { ...v, vid: v.name }
		}
		return v
	})
}

export function countChange({
	name,
	count,
}: {
	name: string,
	count: number,
}): ThunkAction {
	return async (dispatch, getState) => {
		const result = selectors.getResult(getState())
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

export function logId({ id }: { id: string }): ThunkAction {
	return async (dispatch, getState) => {
		const logs = logSelectors.getLogs(getState())
		_.remove(logs, { id })
		const log = {
			id,
			createdAt: moment().format(),
		}
		await dispatch(logActions.receiveLogs([...logs, log]))
	}
}

export function copyGeneratedText(): ThunkAction {
	return async (dispatch, getState) => {
		const text = getState().HomeContainer.generatedText
		copy(text)
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
