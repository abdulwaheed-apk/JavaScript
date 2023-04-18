/* function joinedLogger(level, sep) {
  // write your code here
  function f(...rest) {
    return console.log('red ', rest)
  }
  return f()
}
// f(
//   { level: 10, text: 'foo' },
//   { level: 20, text: 'bar' },
//   { level: 30, text: 'baz' }
// )

console.log(joinedLogger(15, ';')) */
// ** Problem Solving - Arrays
/* function reverseArray(a) {
  return a.reverse()
}
console.log(reverseArray([4, 2, 1, 3])) */
// !
/* function plusMinus(arr) {
  // Write your code here
  let total = arr.length
  let positives = (arr.filter((item) => item > 0).length / total).toFixed(6)
  let negatives = (arr.filter((item) => item < 0).length / total).toFixed(6)
  let zeros = (arr.filter((item) => item === 0).length / total).toFixed(6)
  console.log(positives)
  console.log(negatives)
  console.log(zeros)
}
console.log(plusMinus([1, 1, 0, -1, -1])) */
// !
/* function miniMaxSum(arr) {
  // Write your code here
 
  // // ! Run time Error for only last test (maybe performance issue)
  // let myArr = []
  // for (let i = 0; i < arr.length; i++) {
  //   let newArr = arr.filter((item) => item !== arr[i])
  //   myArr.push(newArr)
  // }
  // let sumArr = []
  // for (let j = 0; j < myArr.length; j++) {
  //   sumArr.push(myArr[j].reduce((acc, curr) => acc + curr))
  // }
  // let sorted = sumArr.sort()
  // console.log(sorted[0], sorted[sorted.length - 1]) 

  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  console.log(sum)
  const minSum = sum - Math.max(...arr)
  const maxSum = sum - Math.min(...arr)
  console.log(minSum, maxSum)
}
console.log(miniMaxSum([1, 3, 5, 7, 9])) */
// !
/* function timeConversion(s) {
  // Write your code here

  let arr = s.split(':')

  // return arr.map((e, index) => index)
}
console.log(timeConversion('13:05:45AM')) */
// !
/* function matchingStrings(strings, queries) {
  // Write your code here
  // *  check every query if it is present in strings array
  // * how many times it is present
  // * return times present in an array

  return queries.map((q) => strings.filter((s) => s === q).length)
}
console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc'])) */
// !
function lonelyInteger(a) {
  //todo Algo
  // check for each element if it is present at another index
  // Return element if it is not present at other instance
  //todo code here
  return a.filter((e) => a.indexOf(e) === a.lastIndexOf(e)).join('')
}
console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]))
