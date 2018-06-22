import m, { parseUnit, parseInputs, parseSelects } from '.'

test('works', () => {
	expect(m('kyoko kyoko toshino.')).toMatchSnapshot('plain')
	expect(m('私は[poke:ゼニガメ|ヒトカゲ|フシギダネ]を選んだ')).toMatchSnapshot(
		'select',
	)
	expect(m('my name is (name).')).toMatchSnapshot('input')
	expect(m('[ア:a|b](a)')).toMatchSnapshot('mix')
	expect(m('[ア:a|b][イ:c|d][ウ:e|f]')).toMatchSnapshot('multiple')
	expect(
		m('before(m1){buttle:(stage)（[rule:a|b]）[result:◯|☓]}(m2)after'),
	).toMatchSnapshot('repeat')
})

test('parseUnit', () => {
	expect(parseInputs('[ア:a|b](a)')).toMatchSnapshot('parseInputs')
	expect(parseSelects('[ア:a|b](a)')).toMatchSnapshot('parseSelects')
	expect(parseUnit('[ア:a|b](a)')).toMatchSnapshot()
})
