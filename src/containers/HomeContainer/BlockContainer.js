// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import BlocksContainer from './BlocksContainer'

import type { State, Block } from '../../types'
// import * as selectors from './selectors'
import * as valueActions from '../ValueById/actions'

type OProps = {
	block: Block,
}
type Props = {
	block: Block,
	valueById: { [vid: string]: string },
	setValue: typeof valueActions.setValue,
}

const isHeadBreak = (str: string) => str[0] === '\n'
const isTailBreak = (str: string) => str[str.length - 1] === '\n'

const BlockContainer = (props: Props) => {
	const { block } = props
	if (block.type === 'text') {
		return (
			<React.Fragment>
				{isHeadBreak(block.text) && <Grid item xs={12} />}
				<Grid item>
					<Typography
						variant="subheading"
						gutterBottom
						style={{ paddingTop: '20px', color: 'gray' }}
					>
						{block.text}
					</Typography>
				</Grid>
				{isTailBreak(block.text) && <Grid item xs={12} />}
			</React.Fragment>
		)
	} else if (block.type === 'select') {
		return (
			<Grid item>
				<TextField
					select
					label={block.name}
					SelectProps={{
						native: true,
					}}
				>
					{block.texts.map((text, i) => (
						<option key={i} value={text}>
							{text}
						</option>
					))}
				</TextField>
			</Grid>
		)
	} else if (block.type === 'input') {
		return (
			<Grid item>
				<TextField
					id={`${block.name}`}
					label={block.name}
					value={props.valueById[block.vid]}
					onChange={e => {
						props.setValue(block.vid, e.target.value)
					}}
				/>
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

const ms = (state: State, op: OProps) => ({
	...op,
	valueById: state.ValueById,
})

const conn = connect(ms, {
	setValue: valueActions.setValue,
})

export default conn(BlockContainer)
