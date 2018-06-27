// @flow
import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import type { TextBlock } from '../../types'

const splitKeep = (str: string, separator: string) =>
	str.split(separator).reduce((p, c) => [...p, separator, c], [])

const styles = {
	blockText: {
		margin: '5px',
		marginTop: '10px',
		background: '#ddd',
		borderRadius: '5px',
		border: 'solid 1px #aaa',
	},
}

type Props = {
	block: TextBlock,
}

const visible = (text: string) => text.replace(/[\s　]/g, '<space>')

const TextGrids = (props: Props) => {
	const { block } = props
	const br = <Grid item xs={12} />
	const textParts = block.text.split('\n')
	return (
		<React.Fragment>
			{textParts.map((tp, i) => {
				const hasNext = i < textParts.length - 1
				const text = visible(tp + (hasNext ? '↩' : ''))
				return (
					<React.Fragment>
						{text && (
							<Grid item style={styles.blockText}>
								<Typography
									variant="subheading"
									gutterBottom
									style={{ paddingTop: '20px' }}
								>
									{text}
								</Typography>
							</Grid>
						)}
						{hasNext && br}
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}

export default TextGrids
