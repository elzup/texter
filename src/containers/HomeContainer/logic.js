// @flow
import _ from 'lodash'
import moment from 'moment'

import type { ThunkAction } from '../../types'
import * as actions from './actions'
import * as logActions from '../LogContainer/actions'
import * as logSelectors from '../LogContainer/selectors'

export function updateText({ text }: { text: string }): ThunkAction {
	return async (dispatch, getState) => {
		const result = { ok: false, blocks: [] }
		await dispatch(actions.updateHome({ text, result }))
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
