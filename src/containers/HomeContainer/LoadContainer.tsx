import { useRouter } from 'next/router'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { strOr } from 'typeor'
import config from '../../config'
import * as logics from './logic'

type Props = {}

function Container() {
	const router = useRouter()
	const dispatch = useDispatch()
	const text = strOr(router.query.text)

	React.useEffect(() => {
		dispatch(logics.updateTextAndRedirect(text, () => {}))
	}, [dispatch, text])
	router.push(config.appPath)

	return <div />
}

export default Container
