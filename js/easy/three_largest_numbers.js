// Return three largest numbers of an array with
// at least three numbers

function findThreeLargestNumbers(array) {
	let smallest, medium, largest
  for (const e of array) {
		if (e > largest || !largest) {
			smallest  = medium
			medium = largest
			largest = e
		}
		else if (e > medium || !medium) {
			smallest = medium
			medium = e
		}
		else if (e > smallest || !smallest) {
			smallest = e
		}
	}
	return [smallest, medium, largest]
}