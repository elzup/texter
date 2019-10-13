import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import HomeContainer from '../HomeContainer'
import LoadContainer from '../HomeContainer/LoadContainer'

// const PreComp = (props: any) => <div>{JSON.stringify(props)}</div>

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={HomeContainer} />
			<Route exact path="/load" component={LoadContainer} />
		</Switch>
	</Router>
)

export default RouteApp
