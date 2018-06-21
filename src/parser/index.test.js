import m from '.'

test('works', () => {
	expect(m('kyoko kyoko toshino.')).toMatchSnapshot()
	expect(m('私は[ゼニガメ|ヒトカゲ|フシギダネ]を選んだ')).toMatchSnapshot()
	expect(m('my name is {name}.')).toMatchSnapshot()
	expect(m('[a|b]{a}')).toMatchSnapshot()
})
