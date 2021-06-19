// Given an arrays of multiple competitions between
// multiple teams and an array of the result of each
// match. Determine the winner.

// Example input
//
// matches = [
//     ["Team1", "Team2"],
//     ["Team1", "Team3"],
//     ["Team2", "Team3"]
// ]
//
// results = [0, 0, 1]
// 0 means the second team in the match wins, 
// 1 means the first team in the match wins
//
// Output: "Team2"

function tournamentWinner(competitions, results) {
	const totals = {}
	for (let i = 0; i < competitions.length; i++) {
		const j = results[i] === 1 ? 0 : 1
		if (competitions[i][j] in totals) totals[competitions[i][j]]++
		else totals[competitions[i][j]] = 1
	}
	const winner = Object.entries(totals).reduce(
		(winner, current) =>
			(winner = current[1] > winner[1] ? current : winner),
		['', 0]
	)
	return winner[0]
}
