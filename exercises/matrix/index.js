// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = [];
    let counter = 1;
    let startRow = 0, startCol = 0
    let endRow = n - 1, endCol = n - 1
    if (startRow <= endRow && startCol <= endCol) {
        for (startCol; startCol < endCol; startCol++) {

        }
    }
}

var twoSum = function (numbers, target) {
    let answer = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                answer.push(i + 1, j + 1)
            }
        }
    }
    return answer

};

console.log(twoSum([2, 7, 11, 15], 9))

module.exports = matrix;
