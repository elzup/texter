// @flow
import type { ParseResult, Block } from '../types'

const re = /\{(.*?)\}/
const re2 = /\[(.*?)\]/

function parseTexter(text: string): ParseResult {
	const blocks: Block[] = [{ type: 'text', text }]
	let m = re.exec(text)
	while (m) {
		const block = blocks.pop()
		if (block.type !== 'text') {
			break
		}
		const [hit, name] = m
		const [head, tail] = block.text.split(hit)
		blocks.push({ type: 'text', text: head })
		blocks.push({ type: 'input', name })
		blocks.push({ type: 'text', text: tail })
		m = re.exec(tail)
	}
	let i = 0
	while (blocks.length > i) {
		const block = blocks[i]
		if (block.type !== 'text') {
			i += 1
			continue
		}
		m = re2.exec(block.text)
		if (!m) {
			i += 1
			continue
		}
		const [hit, names]: [string, string] = m
		const [head, tail] = block.text.split(hit)
		blocks.pop()
		blocks.push({ type: 'text', text: head })
		blocks.push({ type: 'select', texts: names.split('|') })
		blocks.push({ type: 'text', text: tail })
		i += 3
	}
	return { ok: true, blocks }
}

export default parseTexter
