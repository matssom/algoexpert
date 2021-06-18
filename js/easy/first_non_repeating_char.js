// First non repeating character

function firstNonRepeatingCharacter(string) {
	const arr = []
	for (let i = 0; i < string.length; i++) {
		const code = string.charCodeAt(i)
		arr[code] = arr[code] ? arr[code] + 1 : 1
	}
	for (let i = 0; i < string.length; i++) {
		const code = string.charCodeAt(i)
		if (arr[code] === 1) return i
	}
	return -1
}
