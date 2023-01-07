module.exports = function reverse (n) {
    const numAbs = Math.abs(n)
	const intArr = Array.from(String(numAbs))
    const reversed = intArr.reverse().join('')
    const result = Number(reversed)
    return result
}
