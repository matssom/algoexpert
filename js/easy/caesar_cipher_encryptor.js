// Caesar cipher encryptor
// Shifts all characters in string by n

function caesarCipherEncryptor(string, key) {
	const result = []
	for (i = 0; i < string.length; i++) {
		result[i] = nextChar(string.charAt(i), key)
	}
	return result.join('')
}

function nextChar(char, key) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	return alphabet[(alphabet.indexOf(char) + key) % 26]
}
