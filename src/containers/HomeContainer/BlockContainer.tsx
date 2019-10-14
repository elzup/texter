import * as React from 'react'
import { connect, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import _ from 'lodash'
import InputBlock from '../ValueById/InputBlock'
import SelectBlock from '../ValueById/SelectBlock'
import TextGrids from '../../components/TextGrids'

import { State, Block } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type Props = {
	block: Block
	prefix: string
	valueById: { [vid: string]: string }
}
const styles = {
	block: {
		margin: '5px',
		marginTop: '10px',
		borderRadius: '5px',
		minWidth: '150px',
		border: 'solid 1px #aaa',
	},
}

const BlockComponent = (props: Props) => {
	const { block } = props
	const dispatch = useDispatch()

	if (block.type === 'text') {
		return <TextGrids block={block} />
	} else if (block.type === 'select') {
		const vid = props.prefix + block.vid

		return (
			<Grid item style={styles.block}>
				<SelectBlock vid={vid} options={block.texts} />
			</Grid>
		)
	} else if (block.type === 'input') {
		const vid = props.prefix + block.vid

		return (
			<Grid item style={styles.block}>
				<InputBlock vid={vid} viewLabel />
			</Grid>
		)
	} else {
		return (
			<Grid item xs={12} style={styles.block}>
				<Button
					disabled={block.count <= 1}
					onClick={() => {
						dispatch(
							logics.countChange({ name: block.name, count: block.count - 1 }),
						)
					}}
				>
					<RemoveIcon />
				</Button>
				<Button
					onClick={() => {
						dispatch(
							logics.countChange({ name: block.name, count: block.count + 1 }),
						)
					}}
				>
					<AddIcon />
				</Button>
				{_.range(block.count).map(n => (
					<Grid container spacing={1} key={n}>
						{block.blocks.map((child, i) => (
							<BlockContainer
								key={i}
								block={child}
								prefix={`${block.name}${n}-`}
							/>
						))}
					</Grid>
				))}
			</Grid>
		)
	}
}

const ms = (state: State) => ({
	valueById: state.ValueById,
})

const conn = connect(
	ms,
	{},
)

const BlockContainer = conn(BlockComponent)

export default BlockContainer
