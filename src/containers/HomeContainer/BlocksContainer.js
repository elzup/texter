// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import BlockContainer from './BlockContainer'
import type { State, Block } from '../../types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FilterHdr from '@material-ui/icons/FilterHdr'

type Props = {
	blocks: Block[],
	prefix: string,
}

const BlocksContainer = (props: Props) => (
	<Paper>
		<Typography variant="title">
			<FilterHdr />Form
		</Typography>
		<Grid container spacing={16}>
			{props.blocks.map(block => (
				<BlockContainer block={block} prefix={props.prefix} />
			))}
		</Grid>
	</Paper>
)

const ms = (state: State, op) => ({ ...op })

const conn = connect(
	ms,
	{},
)

export default conn(BlocksContainer)
