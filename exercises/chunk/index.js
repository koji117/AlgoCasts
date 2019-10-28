// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = []
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size
    }
    return chunked
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)

module.exports = chunk;

// function chunk(array, size) {
//     let chunked = []
//     for (let num of array){
//         const lastSubArray = chunked[chunked.length - 1]
//         //if chunked has no last element or
//         // its size equals to the specified chunk size
//         if (!lastSubArray || lastSubArray.length === size){
//             chunked.push([num])
//         } else {
//             lastSubArray.push(num)
//         }
//     }
//     console.log(chunked)
//     return chunked
// }
