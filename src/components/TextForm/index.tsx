import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import FilterNone from '@material-ui/icons/FilterNone'

import { ParseResult } from '../../types'
import Title from '../Title'
import ErrorBox from './ErrorBox'

type Props = {
	text: string
	result: ParseResult
	handleChange: (v: { text: string }) => void
	handleCopy: () => void
}

const sampleLink = {
	link1:
		'/#/load?text=日記%202018-(日付)%0A----%0A{出来事:[いつ:朝|昼|夜]%20-%20(内容)%0A}%0A----',
	link2:
		'/#/load?text=Hello%20my%20name%20is%20(name)[power:.|!|!!|!!!!].%20{comment:I%20love%20[thing:cat|dog|code].}',
}

const TextForm = (props: Props) => {
	return (
		<Paper>
			<form action="">
				<Title text={'Template'} icon={<FilterNone />} />
				<TextField
					id="interval"
					type="text"
					multiline
					defaultValue={props.text}
					rows={props.text.split('\n').length}
					label="テキストを入力"
					error={!props.result.ok}
					onChange={e => {
						props.handleChange({ text: e.target.value })
					}}
					inputProps={{ 'data-test': 'event-interval-time-input' }}
					data-test="text-input"
					fullWidth
				/>
				{!props.result.ok && (
					<ErrorBox result={props.result} text={props.text} />
				)}
			</form>
			<div style={{ display: 'flex' }}>
				<div style={{ flex: 1 }} />
				<Button variant="outlined" onClick={props.handleCopy}>
					共有URLをコピー
				</Button>
			</div>
			<Typography variant="subtitle1">使い方・書き方</Typography>
			<Typography variant="body1">
				<code>{`(name)`}</code> 入力ブロック
				<br />
				<code>{`[name:たけのこ|きのこ]`}</code> 選択ブロック
				<br />
				<code>{`{name:内容}`}</code> リピートブロック
				<br />
				※ それぞれ name 必須
				<br />
				<Button variant="outlined" href={sampleLink.link1}>
					例1
				</Button>
				<Button variant="outlined" href={sampleLink.link2}>
					例2
				</Button>
			</Typography>
			{/*<Button onClick={this.onSubmit}>Save</Button> */}
		</Paper>
	)
}

export default TextForm
