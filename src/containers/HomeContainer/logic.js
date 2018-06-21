// @flow
import _ from 'lodash'
import moment from 'moment'
import nicename from 'nicename'

import type { ThunkAction } from '../../types'
import * as actions from './actions'
import * as logActions from '../LogContainer/actions'
import * as logSelectors from '../LogContainer/selectors'

export function updateText({ text }: { text: string }): ThunkAction {
	return async (dispatch, getState) => {
		const judge = text === '' ? [] : nicename(text)
		await dispatch(actions.updateJudge(text, judge))
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
