// ** Basic Algorithms Scripting */

// todo 1: Reverse a String

/* // Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".
// function reverseString(str) {
//   return str;
// }
// reverseString("hello");


function reverseString(str) {
  return str.split('').reverse().toString().replaceAll(',', '')
}
console.log(reverseString('Howdy welcome'))
  */
// todo 2: Factorialize a Number
/* // Return the factorial of the provided integer.

// function factorialize(num) {
//   return num
// }
// factorialize(5)

function factorialize(num) {
  if (num <= 1) return 1
  return num * factorialize(num - 1)
}

console.table(factorialize(5))
 */

// todo 3: Find the Longest Word in a String
// function findLongestWordLength(str) {
//   return str.length
// }

// findLongestWordLength('The quick brown fox jumped over the lazy dog')
function findLongestWordLength(str) {
  let arr1 = str.split(' ')
  let longestWord = 0
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length > longestWord) {
      longestWord = arr1[i].length
    }
  }
  return longestWord
}

findLongestWordLength('The quick brown fox jumped over the lazy dog')
