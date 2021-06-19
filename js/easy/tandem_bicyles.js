// Given two equal length arrays, pair each integer from the two arrays
// such that the sum of Math.max() on each pair is greatest or smallest
// depending on a boolean

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds.sort((a, b) => a - b)
	if (fastest) blueShirtSpeeds.sort((a, b) => b - a)
	else blueShirtSpeeds.sort((a, b) => a - b)
	let total = 0
	for (let i = 0; i < redShirtSpeeds.length; i++) {
		total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
	}
	return total
}
