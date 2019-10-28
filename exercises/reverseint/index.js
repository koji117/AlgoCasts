// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = n.toString().split("").reverse().join("")
    return parseInt(reversed) * Math.sign(n)
}

reverseInt(-981)


module.exports = reverseInt;

// function reverseInt(n) {
//     if (n >= 0) {
//         return parseInt(toReversedString(n))
//     } else {
//         return parseInt(toReversedString(n)) * -1
//     }
// }
//
// function toReversedString(n){
//     return n.toString().split("").reduce((accum, currentInt) => {
//         return currentInt + accum
//     }, "")
// }
