import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import { ParseResultFail } from '../../types'

type Props = {
	text: string
	result: ParseResultFail
}

const HitSpan = styled.span`
	&[data-hit='true'] {
		background: 'red';
	}
`

function ErrorBox(props: Props) {
	return (
		<div style={{ borderBottom: 'orange solid 2px' }}>
			<Typography variant="subtitle1">
				{props.text.split('').map((c, i) => (
					<HitSpan key={i} data-hit={props.result.hilights.includes(i)}>
						{c}
					</HitSpan>
				))}
			</Typography>
			<Typography color="error" variant="subtitle1">
				エラーあり: {props.result.message}
			</Typography>
		</div>
	)
}

export default ErrorBox
