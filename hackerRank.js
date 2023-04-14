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
function miniMaxSum(arr) {
  // Write your code here
  let myArr = []
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.filter((item) => item !== arr[i])
    myArr.push(newArr)
  }
  let sumArr = []
  for (let j = 0; j < myArr.length; j++) {
    sumArr.push(myArr[j].reduce((acc, curr) => acc + curr))
  }
  let sorted = sumArr.sort()
  console.log(sorted[0], sorted[sorted.length - 1])

  /* const sum = arr.reduce((acc, curr) => acc + curr, 0)
   console.log(sum)
   const minSum = sum - Math.max(...arr)
   const maxSum = sum - Math.min(...arr)
   console.log(minSum, maxSum) */
}
console.log(miniMaxSum([1, 3, 5, 7, 9]))
