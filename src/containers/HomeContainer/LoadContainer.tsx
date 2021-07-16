import * as React from 'react'
import { strOr } from 'typeor'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import * as logics from './logic'

type Props = {}

function Container() {
	const router = useRouter()
	const dispatch = useDispatch()
	const text = strOr(router.query.text)

	React.useEffect(() => {
		dispatch(logics.updateTextAndRedirect(text, () => {}))
	}, [dispatch, text])
	router.push('/')

	return <div />
}

export default Container
