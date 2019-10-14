import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import NavBar from '../../components/NavBar'
import ValueTable from '../ValuesTable'
import { State, ParseResult } from '../../types'
import { calcText } from '../ValueById/logic'
import TextForm from './TextForm'
import BlocksContainer from './BlocksContainer'
import GeneratedText from './GeneratedText'
import * as selectors from './selectors'

function HomeContainer() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(calcText())
	}, [calcText])
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
