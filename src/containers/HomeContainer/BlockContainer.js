// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import BlocksContainer from './BlocksContainer'

import type { State, Block } from '../../types'
// import * as selectors from './selectors'

type OProps = {
	block: Block,
}
type Props = {
	block: Block,
}

const BlockContainer = (props: Props) => {
	const { block } = props
	if (block.type === 'text') {
		return (
			<Grid item>
				<Typography variant="title">{block.text}</Typography>
			</Grid>
		)
	} else if (block.type === 'select') {
		return (
			<Grid item>
				<Select
					native
					inputProps={{
						name: 'age',
						id: 'age-native-simple',
					}}
				>
					{block.texts.map((text, i) => (
						<option key={i} value={text}>
							{text}
						</option>
					))}
				</Select>
			</Grid>
		)
	} else if (block.type === 'input') {
		return (
			<Grid item>
				<TextField id={`${block.name}`} label={block.name} margin="normal" />
			</Grid>
		)
	} else {
		return [...Array(5).keys()].map(() => (
			<Grid item xs={12}>
				<BlocksContainer blocks={block.blocks} />
			</Grid>
		))
	}
}

const ms = (state: State, op: OProps) => ({ ...op })

const conn = connect(ms, {})

export default conn(BlockContainer)
