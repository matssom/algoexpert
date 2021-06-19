// Encode a string with the run length encoding pattern

function runLengthEncoding(string) {
	const res = []
	let current = string.charAt(0),
		count = 0
	for (const char of string) {
		if (char !== current || count === 9) {
			res.push(`${count}${current}`)
			count = 0
			current = char
		}
		count++
	}
	res.push(`${count}${current}`)
	return res.join('')
}

// V1 (slightly more work)

// function runLengthEncoding(string) {
// 	const res = []
// 	let current,
// 		count = 0
// 	for (const char of string) {
// 		if (char === current) count++
// 		else {
// 			res.push(encode(count, current))
// 			current = char
// 			count = 1
// 		}
// 	}
// 	res.push(encode(count, current))
// 	return res.join('')
// }

// function encode(amount, char) {
// 	if (!char) return ''
// 	let x = Math.floor(amount / 9)
// 	let y = amount % 9
// 	return `${`9${char}`.repeat(x)}${y > 0 ? `${y}${char}` : ''}`
// }