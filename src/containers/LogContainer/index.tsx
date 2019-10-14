import { connect } from 'react-redux'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'

import { State, Log } from '../../types'
import * as actions from './actions'
import * as selectors from './selectors'

type Props = {
	logs: Log[]
	receiveLog: typeof actions.receiveLog
}

function Container(props: Props) {
	const router = useRouter()

	return (
		<ul>
			{props.logs.map(log => (
				<li key={log.id}>
					<Button
						onClick={() => {
							router.push(`/${log.id}`)
						}}
					>
						{log.id}
					</Button>
				</li>
			))}
		</ul>
	)
}

const ms = (state: State) => {
	return {
		logs: selectors.getLogsRecent(state),
	}
}

const conn = connect(
	ms,
	{
		receiveLog: actions.receiveLog,
	},
)

export default conn(Container)
