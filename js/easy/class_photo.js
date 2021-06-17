// Given two equal length arrays, is it posible to arrange
// them in such a way that each integer at a given index
// in one of the arrays is strictly greater than the integer
// at the same position in the other array?

function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a, b) => a - b)
	blueShirtHeights.sort((a, b) => a - b)

	let tallest, shortest
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		tallest = redShirtHeights
		shortest = blueShirtHeights
	} else if (redShirtHeights[0] < blueShirtHeights[0]) {
		tallest = blueShirtHeights
		shortest = redShirtHeights
	}

	if (tallest && shortest) {
		for (let i = 0; i < tallest.length; i++) {
			if (tallest[i] <= shortest[i]) return false
		}
		return true
	}

	return false
}
