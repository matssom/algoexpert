// Bubble sort algorithm

function bubbleSort(array) {
	let swap = true
	while (swap) {
		swap = false
		for (i = 0; i < array.length - 1; i++) {
			const current = array[i]
			const next = array[i + 1]
			if (current > next) {
				swap = true
				array[i] = next
				array[i + 1] = current
			}
		}
	}
	return array
}
