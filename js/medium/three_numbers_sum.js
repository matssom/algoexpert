// Given an array and a target sum, return, in sorted order, all the three number
// combinations that sum up to the target sum.

function threeNumberSum(array, targetSum) {
	const res = []
	array.sort((a, b) => a - b)
	for (let i = 0; i < array.length - 2; i++) {
		const number = array[i]
		let left = i + 1
		let right = array.length - 1
		while (left !== right) {
			const sum = number + array[left] + array[right]
			if (sum > targetSum) right--
			else if (sum < targetSum) left++
			else {
				res.push([number, array[left], array[right]])
				left++
			}
		}
	}
	return res
}
