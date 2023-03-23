// * plusMinus
// ? Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
function plusMinus(arr) {
  let positive = (arr.filter((num) => num > 0).length / arr.length).toFixed(6)
  let zeros = (arr.filter((num) => num === 0).length / arr.length).toFixed(6)
  let negative = (arr.filter((num) => num < 0).length / arr.length).toFixed(6)

  console.log(positive)
  console.log(negative)
  console.log(zeros)
}
plusMinus([-4, 3, -9, 0, 4, 1])
// * Min Max Sum
// ? Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
/* function miniMaxSum(arr) {
  //todo Algorithms
  //excludeMe 1: digit to exclude (each integer for once)
  // fourArr 2 : four digits  (new Array with remaining four integers)
  // function  two args excludeMe, fourArr
}
miniMaxSum([1, 7, 20, 6, 5]) */
