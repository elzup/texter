// @flow
import * as React from 'react'

import Typography from '@material-ui/core/Typography'

import type { ParseResultFail } from '../../types'

type Props = {
	text: string,
	result: ParseResultFail,
}

const ErrorBox = (props: Props) => (
	<div style={{ borderBottom: 'orange solid 2px' }}>
		<Typography variant="subheading">
			{props.text.split('').map((c, i) => {
				const isHit = props.result.hilights.indexOf(i) > -1
				return (
					<span
						style={
							isHit
								? {
										background: 'red',
								  }
								: {}
						}
					>
						{c}
					</span>
				)
			})}
		</Typography>
		<Typography color="error" variant="subheading">
			エラーあり: {props.result.message}
		</Typography>
	</div>
)

export default ErrorBox
