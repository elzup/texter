import m from '.'

test('works', () => {
	expect(m('kyoko kyoko toshino.')).toMatchSnapshot()
	expect(m('私は[ゼニガメ|ヒトカゲ|フシギダネ]を選んだ')).toMatchSnapshot()
	expect(m('my name is {name}.')).toMatchSnapshot()
	expect(
		m(
			'【定期】{message1} {teamA} vs {teamB} 戦績{win}-{lose} {stage}({rule}){result} {message2}',
		),
	).toMatchSnapshot()
})
