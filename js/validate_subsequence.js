// Validating if a non null array is a subsequence of another non null array.
// o(n) time
// o(1) space

function isValidSubsequence(array, sequence) {
    i = 0
    j = 0
    while (array.length > i && sequence.length > j) {
        if (array[i] === sequence[j]) j++
        i++
    }
    return j === sequence.length
}