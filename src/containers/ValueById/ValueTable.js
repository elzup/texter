// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import RemoveIcon from '@material-ui/icons/Remove'

import InputBlock from './InputBlock'

import _ from 'lodash'

import type { State } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type Props = {
	valueById: { [vid: string]: string },
	saveValue: typeof logics.saveValue,
}

const ValueTable = (props: Props) => (
	<Paper>
		<Typography variant="title">Memory Table</Typography>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell component="th" style={{ width: '20%' }}>
						name
					</TableCell>
					<TableCell component="th">value</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{_.map(props.valueById, (value, vid) => (
					<TableRow>
						<TableCell>{vid}</TableCell>
						<TableCell>
							<InputBlock vid={vid} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Paper>
)

const ms = (state: State) => ({
	valueById: state.ValueById,
})

const conn = connect(
	ms,
	{
		saveValue: logics.saveValue,
	},
)

export default conn(ValueTable)
