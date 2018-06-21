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
		m = re2.exec(block.text)
		if (!m) {
			blocks2.push(block)
			return
		}
		const [hit, names]: [string, string] = m
		const [head, tail] = block.text.split(hit)
		blocks2.push({ type: 'text', text: head })
		blocks2.push({ type: 'select', texts: names.split('|') })
		blocks2.push({ type: 'text', text: tail })
	})
	const blocks = blocks2.filter(noEmptyTextBlock)
	return { ok: true, blocks }
}

export default parseTexter
