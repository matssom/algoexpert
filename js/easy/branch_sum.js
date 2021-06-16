// Calculate the branch sums of a binary tree

// Iterative version
const branchSums = root => {
	let sum = 0
	const nodes = [{ node: root, sum }]
	const sums = []
	while (nodes.length > 0) {
		const current = nodes.pop()
		const node = current.node
		let sum = current.sum
		if (!node) continue
		sum += node.value
		if (!node.left && !node.right) sums.push(sum)
		nodes.push({ node: node.right, sum })
		nodes.push({ node: node.left, sum })
	}
	return sums
}

// Recursive version
const branchSumsRecursive = root => {
	const sums = []
	calculateBranchSums(root, 0, sums)
	return sums
}

const calculateBranchSumsRecursive = (node, runningSum, sums) => {
	if (!node) return

	const newRunningSum = runningSum + node.value
	if (!node.left && !node.right) {
		sums.push(newRunningSum)
		return
	}

	calculateBranchSumsRecursive(node.left, newRunningSum, sums)
	calculateBranchSumsRecursive(node.right, newRunningSum, sums)
}

class BinaryTree {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}
