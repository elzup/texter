// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import BlockContainer from './BlockContainer'
import type { State, Block } from '../../types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

type Props = {
	blocks: Block[],
	prefix: string,
}

const BlocksContainer = (props: Props) => (
	<Paper style={{ padding: '10px', marginTop: '10px' }}>
		<Grid container spacing={16}>
			{props.blocks.map(block => (
				<BlockContainer block={block} prefix={props.prefix} />
			))}
		</Grid>
	</Paper>
)

const ms = (state: State, op) => ({ ...op })

const conn = connect(ms, {})

export default conn(BlocksContainer)
