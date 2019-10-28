// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// col ===

function pyramid(n, row = 0, level = "") {
    if (row === n) {
        return
    }
    if (level.length === n * 2 - 1) {
        console.log(level)
        return pyramid(n, row + 1, "")
    }
    const midPoint = Math.floor((n * 2 - 1) / 2)
    const add = level.length >= midPoint - row && level.length <= midPoint + row
        ? "#" : " "
    // if(level.length >= midPoint - row && level.length <= midPoint + row){
    //     level += "#"
    // }else {
    //     level += " "
    // }
    pyramid(n, row, level + add)
}

pyramid(5)

module.exports = pyramid;

// function pyramid(n) {
//     for (let row = 0; row < n; row++) {
//         let level = ""
//         //Iterate through columns (number of columns equals to number of n *2 -1)
//         for (let col = 0; col < 2 * n - 1 ; col++) {
//             //Caluculate the mid point by dividing the length of column by 2
//             const midPoint = Math.floor((2 * n - 1) / 2);
//             //2 - 0 <= 0 && 2 + 0 >= 0
//             if (midPoint - row <= col && midPoint + row >= col){
//                 level += "#"
//             }else {
//                 level += " "
//             }
//         }
//         console.log(level)
//     }
// }

