// Encode a string with the run length encoding pattern

function runLengthEncoding(string) {
	const res = []
	let current,
		count = 0
	for (const char of string) {
		if (char === current) count++
		else {
			res.push(encode(count, current))
			current = char
			count = 1
		}
	}
	res.push(encode(count, current))
	return res.join('')
}

function encode(amount, char) {
	if (!char) return ''
	let x = Math.floor(amount / 9)
	let y = amount % 9
	return `${`9${char}`.repeat(x)}${y > 0 ? `${y}${char}` : ''}`
}
