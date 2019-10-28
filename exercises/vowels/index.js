// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matched = str.match(/[aiueo]/g)
    console.log(matched.length)
    return matched ? matched.length : 0
}

vowels('Hi ThereEE!')

module.exports = vowels;

// function vowels(str) {
//     let numberOfVowels = 0;
//     // let vowels = "aiueo"
//     let vowels = ["a", "e", "i", "o", "u", "aio"]
//     for (let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             numberOfVowels++
//         }
//     }
//     return numberOfVowels
// }
