// given a binary search tree and a target value. Find the closest match

function findClosestValueInBst(tree, target) {
	let closest = tree
	let current = tree
	while (true) {
		if (Math.abs(current.value - target) < Math.abs(closest.value - target))
			closest = current
		if (target > current.value) current = current.right
		else current = current.left
		if (!current) break
	}
	return closest.value
}
class BST {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}
