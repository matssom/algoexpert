// Square a sorted array and return it still sorted

function sortedSquaredArray(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i] * array[i]
	}
	return array.sort((a, b) => a - b)
}
