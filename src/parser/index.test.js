import m from '.'

test('works', () => {
	expect(m('kyoko kyoko toshino.')).toMatchSnapshot()
	expect(m('私は[poke:ゼニガメ|ヒトカゲ|フシギダネ]を選んだ')).toMatchSnapshot()
	expect(m('my name is {name}.')).toMatchSnapshot()
	expect(m('[ア:a|b]{a}')).toMatchSnapshot()
})
