import _ from 'lodash'
import { ThunkAction } from '../../types'
import * as actions from './actions'

export function addKeys(newVids: string[]): ThunkAction {
	return async (dispatch, getState) => {
		const { vids } = getState().ValuesTable

		await dispatch(actions.updateVids(_.uniq([...newVids, ...vids])))
	}
}

export function revokeKey({ vid }: { vid: string }): ThunkAction {
	return async (dispatch, getState) => {
		const { vids } = getState().ValuesTable

		await dispatch(actions.updateVids(vids.filter(v => v !== vid)))
	}
}
