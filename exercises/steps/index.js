// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// TRY ITERATIVE SOLUTION FIRST AND THEN TRY RECURSIVE SOLUTION
// function steps(n, row = 0, stair = "") {
//     while(row < n){
//         let level = "";
//         for (let column = 0; column < n; column++) {
//             if(column > row){
//                 level += " ";
//             }
//             if(column <= row){
//                 level += "#";
//             }
//         }
//         console.log(level);
//         row++;
//         return steps(n, row + 1)
//     }
// }

steps(10)

function steps(n, row = 0, stair = "") {
    for (let row = 0; row < n; row++) {
        let level = "";
        for (let column = 0; column < n; column++) {
            level = column <= row ? level + "#" : level + " ";
        }
        console.log(level);
    }
}

// Array solution unfinished
// function steps(n, row = 0, stair = "") {
//     const level = [];
//     let rowMod = [];
//     while (level.length < n){
//
//         if(rowMod.length <= level.length){
//             rowMod.push("#");
//         }
//         if(rowMod.length > level.length){
//             rowMod.push(" ")
//         }
//         if(rowMod.length === n){
//             console.log(rowMod.join(""));
//             level.push(rowMod);
//             rowMod = [];
//         }
//     }
//
//     return;
// }


module.exports = steps;

