// @flow
import _ from 'lodash'
import moment from 'moment'

import type { ThunkAction, Block } from '../../types'
import parser from '../../parser'
import * as actions from './actions'
import * as logActions from '../LogContainer/actions'
import * as logSelectors from '../LogContainer/selectors'
import * as selectors from './selectors'

export function updateText({ text }: { text: string }): ThunkAction {
	return async (dispatch, getState) => {
		const result0 = parser(text)
		const result = { ...result0, blocks: setIds(result0.blocks) }
		await dispatch(actions.updateHome({ text, result }))
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
