// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import BlockContainer from './BlockContainer'
import type { State, Block } from '../../types'
import Grid from '@material-ui/core/Grid'

type Props = {
	blocks: Block[],
}

const BlocksContainer = (props: Props) => (
	<Grid container spacing={16}>
		{props.blocks.map(block => <BlockContainer block={block} />)}
	</Grid>
)

const ms = (state: State, op) => ({ ...op })

const conn = connect(ms, {})

export default conn(BlocksContainer)
