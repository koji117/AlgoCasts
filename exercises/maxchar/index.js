// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {}
    for (let char of str) {
        map[char] = map[char] + 1 || 1;
        // if (map[char]){
        //     map[char]++
        // } else {
        //     map[char] = 1;
        // }
    }
    let max = 0
    let maxChar;
    for (let key in map) {
        if (map[key] > max) {
            max = map[key]
            maxChar = key
        }
    }
    return maxChar
}

maxChar("abcccccccd")

module.exports = maxChar;
