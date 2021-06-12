// Calculate the branch sums of a binary tree

// Iterative version
const branchSums = (root) => {
	let sum = 0
	const nodes = [{node: root, sum}]
	const sums = []
	while (nodes.length > 0) {
		const current = nodes.pop()
		const node = current.node
		let sum = current.sum
		if (!node) continue
		sum += node.value
		if (!node.left && !node.right) sums.push(sum)
		nodes.push({node: node.right, sum})
		nodes.push({node: node.left, sum})
	}
	return sums
}