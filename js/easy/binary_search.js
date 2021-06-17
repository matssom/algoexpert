// Binary search

function binarySearch(array, target) {
	let min = 0,
		max = array.length - 1
	while (min <= max) {
		const i = Math.floor((min + max) / 2)
		const mid = array[i]
		if (mid === target) return i
		else if (mid > target) max = i - 1
		else min = i + 1
	}
	return -1
}
