import m from '..'

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

	expect(m('hoge(match)-(in\\(clu\\)ds)')).toMatchSnapshot('escape')
	expect(m('hoge{a:match-\\{not match} [a:not match\\}]')).toMatchSnapshot(
		'escape',
	)
})

test('input block error', () => {
	expect(m('hoge()')).toMatchSnapshot('no label')
	expect(m('hoge([])')).toMatchSnapshot('has block')
	expect(m('hoge(hoge[])')).toMatchSnapshot('has block')
})

test('select block error', () => {
	expect(m('(hoge)-[fuga|piyo]')).toMatchSnapshot('no label')
	expect(m('{hoge}')).toMatchSnapshot()
})

test('repeat block error', () => {
	expect(m('(hoge)-[fuga|piyo]')).toMatchSnapshot('no label')
	expect(m('{h{a:b}oge}')).toMatchSnapshot('multi repeat')
})

test('parse error', () => {
	expect(m('(ho[ge)')).toMatchSnapshot('no pair')
	expect(m('(ho[g(a)]e)')).toMatchSnapshot('deep nest')
})
