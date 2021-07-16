import Grid from '@material-ui/core/Grid'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar'
import { ParseResult, State } from '../../types'
import { calcText } from '../ValueById/logic'
import ValueTable from '../ValuesTable'
import BlocksContainer from './BlocksContainer'
import GeneratedText from './GeneratedText'
import * as selectors from './selectors'
import TextForm from './TextForm'

function HomeContainer() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		console.log('calcText')
		dispatch(calcText())
	}, [dispatch])
	const result = useSelector<State, ParseResult>(selectors.getResult)

	return (
		<div>
			<NavBar />
			<Grid container justify="center" style={{ marginBottom: '100px' }}>
				<Grid item xs={12} md={10}>
					<TextForm />
					{result.ok && <BlocksContainer blocks={result.blocks} prefix="" />}
					<GeneratedText />
					<ValueTable />
				</Grid>
			</Grid>
		</div>
	)
}

export default HomeContainer
