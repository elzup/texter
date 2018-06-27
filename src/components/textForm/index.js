// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import FilterNone from '@material-ui/icons/FilterNone'

import Title from '../Title'

type Props = {
	text: string,
	handleLike: ({ text: string }) => void,
	handleChange: ({ text: string }) => void,
	handleCopy: Function,
}

const sampleLink = {
	link1:
		'/#/日記%202018-(日付)%0A----%0A{出来事:[いつ:朝|昼|夜]%20-%20(内容)%0A}%0A----',
	link2:
		'/#/Hello%20my%20name%20is%20(name)[power:.|!|!!|!!!!].%20{comment:I%20love%20[thing:cat|dog|code].}',
}

class textForm extends React.Component<Props> {
	textRef: ?HTMLInputElement

	onSubmit = () => {
		if (!this.textRef) {
			return
		}
		this.props.handleLike({ text: this.textRef.value })
	}

	onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
		this.props.handleChange({ text: e.target.value })
	}

	componentWillReceiveProps(nextProps: Props) {
		if (!this.textRef) {
			return
		}
		this.textRef.value = nextProps.text
	}

	render() {
		const { props } = this
		return (
			<Paper>
				<form action="" onSubmit={this.onSubmit}>
					<Title text={'Template'} icon={<FilterNone />} />
					<TextField
						id="interval"
						type="text"
						multiline
						defaultValue={props.text}
						inputRef={r => {
							this.textRef = r
						}}
						rows={props.text.split('\n').length}
						helperText=""
						onChange={this.onChange}
						inputProps={{ 'data-test': 'event-interval-time-input' }}
						data-test="text-input"
						fullWidth
					/>
				</form>
				<div style={{ display: 'flex' }}>
					<div style={{ flex: 1 }} />
					<Button variant="outlined" onClick={props.handleCopy}>
						共有URLをコピー
					</Button>
				</div>
				<Typography variant="subheading">使い方・書き方</Typography>
				<Typography variant="body1">
					<code>{`(name)`}</code> 入力ブロック<br />
					<code>{`[name:たけのこ|きのこ]`}</code> 選択ブロック<br />
					<code>{`{name:内容}`}</code> リピートブロック<br />
					※ それぞれ name 必須<br />
					<a href={sampleLink.link1} style={{ marginLeft: '1em' }}>
						例1
					</a>
					<a href={sampleLink.link2} style={{ marginLeft: '1em' }}>
						例2
					</a>
				</Typography>
				{/*<Button onClick={this.onSubmit}>Save</Button> */}
			</Paper>
		)
	}
}

export default textForm
