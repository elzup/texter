import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { Auth } from '../../types'

type Props = {
	doLogout: () => void
	doLogin: () => void
	auth: Auth
}

function SimpleAppBar(props: Props) {
	return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar color="inherit">
					<Typography variant="h6" color="inherit" style={{ flex: 1 }}>
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
							<React.Fragment>
								<Button color="inherit" onClick={() => props.doLogout()}>
									ログアウト
								</Button>
								<Button color="inherit">{JSON.stringify(props.auth)}</Button>
							</React.Fragment>
						) : (
							<Button color="inherit" onClick={() => props.doLogin()}>
								Twitter ログイン
							</Button>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default SimpleAppBar
