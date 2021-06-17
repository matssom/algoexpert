// Check if string is palindrome (is the same reversed)

function isPalindrome(string) {
	let min = 0,
		max = string.length - 1
	while (min <= max) {
		if (string.charAt(min) !== string.charAt(max)) return false
		min++
		max--
	}
	return true
}
