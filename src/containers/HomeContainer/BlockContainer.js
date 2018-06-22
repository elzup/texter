// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import BlocksContainer from './BlocksContainer'

import type { State, Block } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'
import * as valueLogics from '../ValueById/logic'

type OProps = {
	block: Block,
	prefix: string,
}
type Props = {
	block: Block,
	prefix: string,
	valueById: { [vid: string]: string },
	saveValue: typeof valueLogics.saveValue,
	countChange: typeof logics.countChange,
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
		const vid = props.prefix + block.vid
		return (
			<Grid item>
				<TextField
					select
					label={block.name}
					SelectProps={{
						native: true,
					}}
					value={props.valueById[vid]}
					error={props.valueById[vid] === undefined}
					onChange={e => {
						props.saveValue({ vid, value: e.target.value })
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
		const vid = props.prefix + block.vid
		return (
			<Grid item>
				<TextField
					id={`${block.name}`}
					label={block.name}
					value={props.valueById[vid]}
					error={props.valueById[vid] === undefined}
					onChange={e => {
						props.saveValue({ vid, value: e.target.value })
					}}
				/>
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
					<BlocksContainer
						blocks={block.blocks}
						prefix={`${block.name}-${n}-`}
					/>
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

const conn = connect(ms, {
	saveValue: valueLogics.saveValue,
	countChange: logics.countChange,
})

export default conn(BlockContainer)
