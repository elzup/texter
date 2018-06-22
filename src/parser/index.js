// @flow
import type { ParseResult, Block } from '../types'

const reInput = /\((.*?)\)/
const reSelect = /\[(.*?:.*?)\]/
// const reNum = /<(.*?)>/
const reRepeat = /\{(.*?:.*?)\}/

const noEmptyTextBlock = (b: Block) => b.type !== 'text' || b.text !== ''

function spliter(
	text: string,
	reg: RegExp,
): { ok: false } | { ok: true, before: string, hit: string, after: string } {
	const m: string[] | null = reg.exec(text)
	if (!m) {
		return { ok: false }
	}
	const [all, hit] = m
	const [before, after] = text.split(all)
	return { ok: true, hit, before, after }
}

const textBlock = (text: string) => ({ type: 'text', text })

export function parseInputs(text: string): Block[] {
	const blocks: Block[] = []
	let remaining = text
	let res = spliter(remaining, reInput)
	while (res.ok) {
		blocks.push(textBlock(res.before))
		blocks.push({ type: 'input', name: res.hit })
		remaining = res.after
		res = spliter(remaining, reInput)
	}
	blocks.push(textBlock(remaining))
	return blocks.filter(noEmptyTextBlock)
}

export function parseSelects(text: string): Block[] {
	const blocks: Block[] = []
	let remaining = text
	let res = spliter(remaining, reSelect)
	while (res.ok) {
		blocks.push(textBlock(res.before))
		const [name, textsText] = res.hit.split(':')
		const texts = textsText.split('|')
		blocks.push({ type: 'select', name, texts })
		remaining = res.after
		res = spliter(remaining, reSelect)
	}
	blocks.push(textBlock(remaining))
	return blocks.filter(noEmptyTextBlock)
}

function parseRepats(text: string): Block[] {
	const blocks: Block[] = []
	let remaining = text
	let res = spliter(remaining, reRepeat)
	while (res.ok) {
		blocks.push(textBlock(res.before))
		const [name, ...tails] = res.hit.split(':')
		blocks.push({ type: 'repeat', name, blocks: [textBlock(tails.join(':'))] })
		remaining = res.after
		res = spliter(remaining, reRepeat)
	}
	blocks.push(textBlock(remaining))
	return blocks.filter(noEmptyTextBlock)
}

export function parseUnit(text: string): Block[] {
	const blocksI = parseInputs(text)
	let blocks = []
	blocksI.forEach(b => {
		if (b.type !== 'text') {
			blocks.push(b)
			return
		}
		blocks = [...blocks, ...parseSelects(b.text)]
	})
	return blocks
}

function parse(text: string): Block[] {
	const blocksR = parseRepats(text)
	let blocks = []
	blocksR.forEach(b => {
		if (b.type === 'repeat') {
			const sb = b.blocks[0]
			if (sb.type !== 'text') {
				return
			}
			blocks.push({
				type: 'repeat',
				name: b.name,
				blocks: parseUnit(sb.text),
			})
			return
		}
		if (b.type === 'text') {
			blocks = [...blocks, ...parseUnit(b.text)]
		}
	})
	return blocks
}

function parseTexter(text: string): ParseResult {
	return { ok: true, blocks: parse(text) }
}

export default parseTexter
