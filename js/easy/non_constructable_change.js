// First non constructable change from list of coins

function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b)
	let change = 0
	for (const coin of coins) {
		if (coin > change + 1) return change + 1
		change += coin
	}
	return change + 1
}
