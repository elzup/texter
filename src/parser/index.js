// @flow
import type { ParseResult, Block } from '../types'

function parseTexter(text: string): ParseResult {
	const blocks: Block[] = [{ type: 'text', text }]
	const re = /\{(.*?)\}/
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
	return { ok: true, blocks }
}

export default parseTexter
