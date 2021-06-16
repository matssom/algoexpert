// Sum all the node depth's of a binary tree

const nodeDepthRecursive = (node, depth) => {
	if (!node) return 0
	let sum = depth
	const nextDepth = depth + 1
	sum += nodeDepthRecursive(node.left, nextDepth)
	sum += nodeDepthRecursive(node.right, nextDepth)
	return sum
}

const nodeDepths = (root) => {
  return nodeDepthRecursive(root, 0)
}

class BinaryTree {
	constructor(value) {
	  this.value = value;
	  this.left = null;
	  this.right = null;
	}
}