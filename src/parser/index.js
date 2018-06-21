// @flow
import type { ParseResult, Block } from '../types'

const re = /\{(.*?)\}/
const re2 = /\[(.*?)\]/

const noEmptyTextBlock = (b: Block) => b.type !== 'text' || b.text !== ''

function parseTexter(text: string): ParseResult {
	const blocks1: Block[] = [{ type: 'text', text }]
	let m = re.exec(text)
	while (m) {
		const block = blocks1.pop()
		if (block.type !== 'text') {
			break
		}
		const [hit, name] = m
		const [head, tail] = block.text.split(hit)
		blocks1.push({ type: 'text', text: head })
		blocks1.push({ type: 'input', name })
		blocks1.push({ type: 'text', text: tail })
		m = re.exec(tail)
	}
	const blocks2: Block[] = []
	blocks1.forEach(block => {
		if (block.type !== 'text') {
			blocks2.push(block)
			return
		}
		let remaining = block.text
		m = re2.exec(remaining)
		while (true) {
			if (!m) {
				blocks2.push({ type: 'text', text: remaining })
				return
			}
			const [hit, nameText]: [string, string] = m
			const [head, tail] = remaining.split(hit)
			if (nameText.indexOf(':') === -1) {
				return
			}
			const [name, textsText] = nameText.split(':')
			const texts = textsText.split('|')
			if (name[name.length - 1] === '*') {
				blocks2.push({ type: 'text', text: head })
				blocks2.push({ type: 'select-repeat', name, texts })
			} else {
				blocks2.push({ type: 'text', text: head })
				blocks2.push({ type: 'select', name, texts })
			}
			remaining = tail
			m = re2.exec(remaining)
		}
	})
	const blocks = blocks2.filter(noEmptyTextBlock)
	return { ok: true, blocks }
}

export default parseTexter
