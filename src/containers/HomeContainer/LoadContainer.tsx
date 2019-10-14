import * as React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { strOr } from 'typeor'
import * as logics from './logic'

type Props = {}

function Container() {
	const location = useLocation()
	const parsed = queryString.parse(location.search)
	const text = strOr(parsed.text)

	React.useEffect(() => {
		logics.updateTextAndRedirect({ text })
	}, [text])

	return <div />
}

export default Container
