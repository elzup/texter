import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import type { Auth } from '../../types'

type Props = {
	doLogout: Function,
	doLogin: Function,
	auth: Auth,
}

function SimpleAppBar(props: Props) {
	return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar color="inherit">
					<Typography variant="title" color="inherit" style={{ flex: 1 }}>
						texter
					</Typography>
					<div>
						<Button
							color="inherit"
							href="https://twitter.com/_elzup_"
							target={'_blank'}
						>
							@作者
						</Button>
						{props.auth.logined ? (
							<Button color="inherit" onClick={props.doLogin}>
								ログアウト
							</Button>
						) : (
							<React.Fragment>
								<Button color="inherit" onClick={props.doLogin}>
									Twitter ログイン
								</Button>
								<Button color="inherit" onClick={props.doLogin}>
									{JSON.stringify(props.auth)}
								</Button>
							</React.Fragment>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default SimpleAppBar
