// Insertion sort algorithm

function insertionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let min = i
		for (let j = i; j < array.length; j++) {
			if (array[j] < array[min]) min = j
		}
		if (array[min] < array[i]) {
			const temp = array[i]
			array[i] = array[min]
			array[min] = temp
		}
	}
	return array
}
