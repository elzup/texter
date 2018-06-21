// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import type { State, ParseResult } from '../../types'
import * as selectors from './selectors'

type Props = {
	result: ParseResult,
}

const Container = (props: Props) => <div>{JSON.stringify(props.result)}</div>

const ms = (state: State) => ({ result: selectors.getResult(state) })

const conn = connect(ms, {})

export default conn(Container)
