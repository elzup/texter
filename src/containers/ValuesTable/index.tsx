/* eslint import/max-dependencies: 0 */
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import RemoveIcon from '@material-ui/icons/Delete'

import ChangeHistory from '@material-ui/icons/ChangeHistory'
import Title from '../../components/Title'

import { State } from '../../types'
import { State as ValueById } from '../ValueById/reducer'
import * as selectors from './selectors'
import * as logics from './logic'

function ValueTable() {
	const vids = useSelector<State, string[]>(state => selectors.getVids(state))
	const valueById = useSelector<State, ValueById>(state => state.ValueById)

	const dispatch = useDispatch()

	return (
		<Paper>
			<Title text={'Memory Table'} icon={<ChangeHistory />} />
			<Table>
				<TableHead>
					<TableRow>
						<TableCell component="th" style={{ width: '20%' }}>
							name
						</TableCell>
						<TableCell component="th">value</TableCell>
						<TableCell component="th">manage</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{vids.map(vid => (
						<TableRow key={vid}>
							<TableCell>{vid}</TableCell>
							<TableCell>{valueById[vid]}</TableCell>
							<TableCell>
								<Button
									variant="outlined"
									size="small"
									onClick={() => dispatch(logics.revokeKey({ vid }))}
								>
									<RemoveIcon />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	)
}

export default ValueTable
