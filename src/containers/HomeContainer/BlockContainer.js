// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import InputBlock from '../ValueById/InputBlock'
import SelectBlock from '../ValueById/SelectBlock'

import type { State, Block } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type OProps = {
	block: Block,
	prefix: string,
}
type Props = {
	block: Block,
	prefix: string,
	valueById: { [vid: string]: string },
	countChange: typeof logics.countChange,
}

const isHeadBreak = (str: string) => str[0] === '\n'
const isTailBreak = (str: string) => str[str.length - 1] === '\n'

const BlockComponent = (props: Props) => {
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
		const vid = props.prefix + block.vid
		return (
			<Grid item>
				<SelectBlock vid={vid} options={block.texts} />
			</Grid>
		)
	} else if (block.type === 'input') {
		const vid = props.prefix + block.vid
		return (
			<Grid item>
				<InputBlock vid={vid} viewLabel={true} />
			</Grid>
		)
	} else {
		return (
			<Grid item xs={12}>
				<Button
					disabled={block.count <= 1}
					onClick={() => {
						props.countChange({ name: block.name, count: block.count - 1 })
					}}
				>
					<RemoveIcon />
				</Button>
				<Button
					onClick={() => {
						props.countChange({ name: block.name, count: block.count + 1 })
					}}
				>
					<AddIcon />
				</Button>
				{[...Array(block.count).keys()].map(n => (
					<Grid container spacing={16}>
						{block.blocks.map((child, i) => (
							<BlockContainer block={child} prefix={`${block.name}${i}-`} />
						))}
					</Grid>
				))}
			</Grid>
		)
	}
}

const ms = (state: State, op: OProps) => ({
	block: op.block,
	prefix: op.prefix,
	valueById: state.ValueById,
})

const conn = connect(
	ms,
	{
		countChange: logics.countChange,
	},
)

const BlockContainer = conn(BlockComponent)
export default BlockContainer
