// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import RemoveIcon from '@material-ui/icons/Remove'

import InputBlock from '../ValueById/InputBlock'
import Title from '../../components/Title'

import type { State } from '../../types'
import * as selectors from './selectors'
import * as logics from './logic'

import ChangeHistory from '@material-ui/icons/ChangeHistory'

type Props = {
	vids: string[],
	revokeKey: typeof logics.revokeKey,
}

const ValueTable = (props: Props) => (
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
				{props.vids.map(vid => (
					<TableRow>
						<TableCell>{vid}</TableCell>
						<TableCell>
							<InputBlock vid={vid} />
						</TableCell>
						<TableCell>
							<Button onClick={() => props.revokeKey({ vid })}>
								<RemoveIcon />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Paper>
)

const ms = (state: State) => ({
	vids: selectors.getVids(state),
})

const conn = connect(
	ms,
	{
		revokeKey: logics.revokeKey,
	},
)

export default conn(ValueTable)
