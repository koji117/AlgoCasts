// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = sortString(stringA)
    let strB = sortString(stringB)
    return strA === strB
}

function sortString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

anagrams('RAIL! SAFETY!', 'fairy tales')

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     let mapA = createMap(stringA)
//     let mapB = createMap(stringB)
//     if(Object.keys(mapA).length === Object.keys(mapB).length ){
//         for (let key in mapA){
//             if(mapA[key] !== mapB[key]){
//                 return false
//             }
//         }
//         return true
//     }else{
//         return false
//     }
//     // console.log(array)
// }
//
// function createMap(str) {
//     let map = []
//     for(let key of str.replace(/[^\w]/g, "").toLowerCase()){
//         map[key] = map[key] + 1 || 1
//     }
//     return map
// }

