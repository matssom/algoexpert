// Determine weather to genereate a document.
// Return true if and only if the frequency of 
// characters in the characters string is greater than
// or equal to the frequency of characters in the
// document string

function generateDocument(characters, document) {
	const charFrequencies = {}
	for (const char of characters) {
		if (char in charFrequencies) charFrequencies[char]++
		else charFrequencies[char] = 1
	}
	for (const char of document) {
		if (charFrequencies[char] > 0) charFrequencies[char]--
		else return false
	}
	return true
}
