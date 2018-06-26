// @flow
import * as React from 'react'
import type { Block } from '../../types'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FilterBAndW from '@material-ui/icons/FilterBAndW'

import Title from '../Title'

type Props = {
	blocks: Block[],
}
const leftBracket = '{'

const style = {
	marginLeft: '5px',
	lineHeight: '2em',
}
const RayOne = ({ block }: { block: Block }) => {
	switch (block.type) {
		case 'text':
			return (
				<Typography variant="body1" component="span" style={{ ...style }}>
					{block.text}
				</Typography>
			)
		case 'input':
			return (
				<Typography variant="body1" component="span" style={{ ...style }}>
					<span style={{ color: 'lime' }}>(</span>
					{block.name}
					<span style={{ color: 'lime' }}>)</span>
				</Typography>
			)
		case 'select':
			return (
				<Typography variant="body1" component="span" style={{ ...style }}>
					<span style={{ color: 'lime' }}>[</span>
					{block.texts.join('|').substring(0, 10)}
					<span style={{ color: 'lime' }}>]</span>
				</Typography>
			)
		case 'repeat':
			return (
				<div
					style={{
						...style,
						display: 'flex',
						borderBottom: '3px double lime',
					}}
				>
					<span style={{ color: 'lime' }}>{leftBracket}</span>
					<Rays blocks={block.blocks} />
					<span style={{ color: 'lime' }}>{'}'}</span>
				</div>
			)
		default:
			return null
	}
}

const Rays = (props: Props) => (
	<React.Fragment>
		{props.blocks.map(block => <RayOne block={block} />)}
	</React.Fragment>
)

const BlockRay = (props: Props) => (
	<Paper>
		<Title text={'Parsed'} icon={<FilterBAndW />} />
		<div style={{ display: 'flex' }}>
			<Rays {...props} />
		</div>
	</Paper>
)

export default BlockRay
