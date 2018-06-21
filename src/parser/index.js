// @flow
import type { ParseResult, Block } from '../types'
import Extractor from 'extract-brackets'

const re = /\{(.*?)\}/
const re2 = /\[(.*?)\]/

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
	const blocks: Block[] = []
	blocks1.forEach(block => {
		if (block.type !== 'text') {
			blocks.push(block)
			return
		}
		m = re2.exec(block.text)
		if (!m) {
			blocks.push(block)
			return
		}
		const [hit, names]: [string, string] = m
		const [head, tail] = block.text.split(hit)
		blocks.push({ type: 'text', text: head })
		blocks.push({ type: 'select', texts: names.split('|') })
		blocks.push({ type: 'text', text: tail })
	})
	return { ok: true, blocks }
}

export default parseTexter
