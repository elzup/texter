// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

import type { State, ParseResult } from '../../types'
import * as selectors from './selectors'

type Props = {
	result: ParseResult,
}

const Container = (props: Props) => (
	<div style={{ display: 'block' }}>
		{props.result.blocks.map(block => {
			if (block.type === 'text') {
				return <Typography variant="title">{block.text}</Typography>
			} else if (block.type === 'select') {
				return (
					<div>
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
					</div>
				)
			} else {
				return (
					<div>
						<TextField
							id={`${block.name}`}
							label={block.name}
							margin="normal"
						/>
					</div>
				)
			}
		})}
	</div>
)

const ms = (state: State) => ({ result: selectors.getResult(state) })

const conn = connect(ms, {})

export default conn(Container)
