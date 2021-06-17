// Compute product sum of a special array
// A special array is a non-empty array with integers or nested arrays
// While computing the product sum, you should multiply the sum of the
// array with the depth it is at.

function productSum(array, depth = 1) {
	let total = 0
	for (const e of array) {
		if (Array.isArray(e)) total += productSum(e, depth + 1)
		else total += e
	}
	return total * depth
}
