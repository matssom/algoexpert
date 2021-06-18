// Determine the minimum waiting time for an array
// of operaitons. Each operation has a duration.
// Return the sum of each of the operations individual
// waiting times.

function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b)
	let total = 0,
		wait = 0
	for (let i = 0; i < queries.length - 1; i++) {
		wait += queries[i]
		total += wait
	}
	return total
}
