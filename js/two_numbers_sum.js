// Check if any two number pairs in an array sum up to a target number

const twoNumberSum = (array, targetSum) => {
	let result = [];
	for (let element of array) {
		for (let element2 of array) {
			if (element + element2 === targetSum && element !== element2)
				result = [element, element2];
		}
	}
	return result;
}