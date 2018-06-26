// @flow
import type {
	ParseResult,
	Block,
	TextBlock,
	InputBlock,
	SelectBlock,
	RepeatBlock,
} from '../types'
import peeler from 'peeler'
import type { PNode, PNodeText, PNodeBracket } from 'peeler/dist/types'

function parseTexter(text: string): ParseResult {
	try {
		const nodes = peeler(text)
		return { ok: true, blocks: nodes.map(convert) }
	} catch (e) {
		return { ok: false, blocks: [] }
	}
}

function makeTextBlock(node: PNodeText): TextBlock {
	return {
		type: 'text',
		text: node.content,
	}
}

function makeInputBlock(node: PNodeBracket): InputBlock {
	if (node.nodes.length !== 1 || node.nodes[0].nodeType !== 'text') {
		throw new Error('構文エラー')
	}
	return {
		type: 'input',
		name: node.nodes[0].content,
		vid: '',
	}
}

function makeSelectBlock(node: PNodeBracket): SelectBlock {
	if (node.nodes.length !== 1 || node.nodes[0].nodeType !== 'text') {
		throw new Error('構文エラー')
	}
	const firstNode = node.nodes[0]
	const { name, newNode } = splitName(firstNode)
	return {
		type: 'select',
		name,
		vid: '',
		texts: newNode.content.split('|'),
	}
}

function makeRepeatBlock(node: PNodeBracket): RepeatBlock {
	if (node.nodes.length === 0 || node.nodes[0].nodeType !== 'text') {
		throw new Error('構文エラー')
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
			throw new Error('unreachable')
	}
}

function splitName(node: PNode): { name: string, newNode: PNodeText } {
	if (node.nodeType !== 'text') {
		throw new Error('ラベルがない')
	}
	const texts = node.content.split(':')
	if (texts.length !== 2) {
		throw new Error('ラベルがない')
	}
	const [name, content] = texts
	return { name, newNode: { ...node, content } }
}

export default parseTexter
