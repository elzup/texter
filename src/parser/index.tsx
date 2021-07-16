import peeler from 'peeler'
import { PNode, PNodeBracket, PNodeText } from 'peeler/dist/types'
import {
	Block,
	InputBlock,
	ParseResult,
	RepeatBlock,
	SelectBlock,
	TextBlock,
} from '../types'

function parseTexter(text: string): ParseResult {
	try {
		const nodes = peeler(text)

		return { ok: true, blocks: nodes.map(convert) }
	} catch (e) {
		if (e.message.match(/ParseError/)) {
			const a = e.message.split(':')
			const line = Number(a[a.length - 1])

			return { ok: false, message: `対応する括弧がない`, hilights: [line] }
		} else if (e.message.match(/BlockError|NoLabelError|MultiRepeatError/)) {
			const [, message, nums] = e.message.split(':')

			return { ok: false, message, hilights: nums.split(',').map(Number) }
		}
		return { ok: false, message: e.message, hilights: [] }
	}
}

function makeTextBlock(node: PNodeText): TextBlock {
	return {
		type: 'text',
		text: node.content,
	}
}

function makeInputBlock(node: PNodeBracket): InputBlock {
	if (node.nodes.length === 0) {
		throw new Error(
			`NoLabelError:入力ブロックのラベルがない:${node.pos.start},${node.pos.end}`,
		)
	}
	const first = node.nodes[0]

	if (node.nodes.length > 1 || first.nodeType !== 'text') {
		throw new Error(
			`BlockError:入力ブロックの中に括弧:${node.pos.start},${node.pos.end}`,
		)
	}
	return {
		type: 'input',
		name: first.content,
		vid: '',
	}
}

function makeSelectBlock(node: PNodeBracket): SelectBlock {
	if (node.nodes.length === 0) {
		throw new Error(
			`NoLabelError:選択ブロックのラベルがない:${node.pos.start},${node.pos.end}`,
		)
	}
	const first = node.nodes[0]

	if (node.nodes.length > 1 || first.nodeType !== 'text') {
		throw new Error(
			`BlockError:選択ブロックの中に括弧:${node.pos.start},${node.pos.end}`,
		)
	}
	const { name, newNode } = splitName(first)

	return {
		type: 'select',
		name,
		vid: '',
		texts: newNode.content.split('|'),
	}
}

function makeRepeatBlock(node: PNodeBracket): RepeatBlock {
	if (node.nodes.length === 0 || node.nodes[0].nodeType !== 'text') {
		throw new Error(
			`NoLabelError:リピートブロックのラベルがない:${node.pos.start},${node.pos.end}`,
		)
	}
	const firstNode = node.nodes[0]
	const { name, newNode } = splitName(firstNode)

	node.nodes[0] = newNode
	return {
		type: 'repeat',
		name,
		count: 1,
		blocks: node.nodes.map(convert),
	}
}

// TODO: const noLabelError = new Error('no label')

function convert(node: PNode): Block {
	if (node.nodeType === 'text') {
		return makeTextBlock(node)
	}
	switch (node.open) {
		case '{':
			return makeRepeatBlock(node)
		case '[':
			return makeSelectBlock(node)
		case '(':
			return makeInputBlock(node)
		default:
			throw new Error('ParseError: 謎のエラー')
	}
}

function splitName(node: PNodeText): { name: string; newNode: PNodeText } {
	const texts = node.content.split(':')

	if (texts.length !== 2) {
		throw new Error(
			`NoLabelError:ブロックのラベルが正しくない:${node.pos.start},${node.pos.end}`,
		)
	}
	const [name, content] = texts

	return { name, newNode: { ...node, content } }
}

export default parseTexter
