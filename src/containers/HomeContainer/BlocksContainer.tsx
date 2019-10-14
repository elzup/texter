import * as React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FilterHdr from '@material-ui/icons/FilterHdr'
import { State, Block } from '../../types'

import Title from '../../components/Title'
import BlockContainer from './BlockContainer'

type Props = {
	blocks: Block[]
	prefix: string
}

const BlocksContainer = (props: Props) => (
	<Paper style={{ paddingBottom: '30px' }}>
		<Title text={'Form'} icon={<FilterHdr />} />
		<Grid container spacing={1}>
			{props.blocks.map((block, i) => (
				<BlockContainer key={i} block={block} prefix={props.prefix} />
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
