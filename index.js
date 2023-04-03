// * plusMinus
// ? Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
/* function plusMinus(arr) {
  let positive = (arr.filter((num) => num > 0).length / arr.length).toFixed(6)
  let zeros = (arr.filter((num) => num === 0).length / arr.length).toFixed(6)
  let negative = (arr.filter((num) => num < 0).length / arr.length).toFixed(6)

  console.log(positive)
  console.log(negative)
  console.log(zeros)
}
plusMinus([-4, 3, -9, 0, 4, 1]) */
// * Min Max Sum
/* // ? Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
  //todo Algorithms
  //excludeMe 1: digit to exclude (each integer for once)
  // fourArr 2 : four digits  (new Array with remaining four integers)
  // function  two args excludeMe, fourArr
}
miniMaxSum([1, 7, 20, 6, 5]) */

/* function nextCharInAlphabets(inputString) {
  // Convert the input string to an array of characters
  const chars = inputString.split('')

  // Map each character to the next one in the English alphabet
  const result = chars.map((char) => {
    // Get the Unicode code of the current character
    let code = char.charCodeAt(0)

    // Check if the current character is a lowercase letter
    if (code >= 97 && code <= 122) {
      // Shift the code by 1 and wrap around if it goes beyond 'z'
      code = ((code - 97 + 1) % 26) + 97
    }
    // Check if the current character is an uppercase letter
    else if (code >= 65 && code <= 90) {
      // Shift the code by 1 and wrap around if it goes beyond 'Z'
      code = ((code - 65 + 1) % 26) + 65
    }
    // Return the corresponding character
    return String.fromCharCode(code)
  })

  // Join the resulting array of characters back into a string
  return result.join('')
}
console.log(nextCharInAlphabets('Acr')) */

// * code wars
// function findOutlier(integers) {
//   //your code here

//   // for(let i=0; i<integers.length; i++) {
//   //   let even = (integers[i]%2 === 0);
//   //   let odd = (integers[i]%2 !== 0)
//   //   // if (even === )
//   //   // console.log(integers[i] , "is even ",even)
//   //   // console.log(integers[i], odd)
//   //  console.log(integers.filter(item => item %2 !==0 ))
//   // }
//   console.log(integers.filter((item) => item % 2 === 0));
// }
// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
//!
// function positiveSum(arr) {
//   if(arr.length === 0) return 0
//   else  {
//    return arr.filter(item => item >0).reduce((a,b) => a+b)
//   }
// }
//!
// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {
//     // setup loop to go through array of given length
//     if (arr[i] > 0) {
//       // if arr[i] is greater than zero
//       total += arr[i]; // add arr[i] to total
//     }
//   }
//   return total; // return total
// }
// console.log(positiveSum([1, -4, 6, 7, 5, 3]));
// !
// function solution(str) {
//   return [...str].reverse().join('');
// }
// console.log(solution('World'));
//!
// function removeChar(str) {
//   //You got this!
//   return str.slice(1, str.length - 1);
// }
// console.log(removeChar('eloquentff'));
//!
/* function squareSum(numbers) {
  let square = []
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    square.push(numbers[i] * numbers[i])
  }
  for (let i = 0; i < square.length; i++) sum += square[i]
  return sum
}
console.log(squareSum([1, 2, 2]))
 */
//!
/* function noSpace(x) {
  return x.split(' ').join('')
}

console.log(noSpace('Hello There')) */
//!
/* function findSmallestInt(args) {
  // let arr = args.sort((a, b) => b - a)
  // return arr.pop()
  return Math.min(...args)
}
console.log(findSmallestInt([34, -345, -1, 100]))
 */
//!
/* function countSheep(arrayOfSheep) {
  // TODO May the force be with you
  //   let presentSheep = ['yes me']
  //   for (let i = 0; i < arrayOfSheep.length; i++) {
  //     presentSheep.push(arrayOfSheep[i] === true)
  //     // console.log(arrayOfSheep[i] === true)
  //   }
  //   return presentSheep.filter((item) => item === true).length
  return arrayOfSheep.filter(Boolean).length
}
console.log(
  countSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
)
 */
// !
/* function basicOp(operation, value1, value2) {
  // Code
  // return eval(`${value1} ${operation} ${value2}`)
  switch (operation) {
    case '+':
      return value1 + value2
      break
    case '-':
      return value1 - value2
      break
    case '*':
      return value1 * value2
      break
    case '/':
      return value1 / value2
      break
    default:
      return 0
  }
}
console.log(basicOp('-', 15, 18)) */
// !
/* function century(year) {
  // Finish this :)
  // let century = Math.floor(year / 100)
  // if (year % 100 > 0) {
  //   century++
  // }
  // return century
  // return Math.floor((year + 99) / 100)
  return Math.ceil(year / 100)
}
console.log(century(1901))
 */
// !
/* // Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return Math.trunc(time / 2)
}
console.log(litres(12.3))
 */
// !
/* // Abbreviate a Two Word Name
function abbrevName(name) {
  // code away
  let arr = name.split(' ')
  return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase()
}
console.log(abbrevName('Sam Harris')) */
//!
/* // Vowel Count
function getCount(str) {
  // let arr1 = str.split('')
  // let arr2 = []
  // for (let i = 0; i < arr1.length; i++) {
  //   if (
  //     arr1[i] === 'a' ||
  //     arr1[i] === 'e' ||
  //     arr1[i] === 'i' ||
  //     arr1[i] === 'o' ||
  //     arr1[i] === 'u'
  //   ) {
  //     arr2.push(arr1[i])
  //   }
  // }
  // return arr2.length 
  return (str.match(/[aeiou]/gi) || []).length
}
console.log(getCount('abracadaeia')) */
// !
function disemvowel(str) {
  /*  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const words = str.split(' ')

  const disemvoweledWords = words.map((word) =>
    [...word].filter((char) => !vowels.includes(char)).join('')
  )

  return disemvoweledWords.join(' ') */
  return str.replace(/[aeiou]/gi, '')
}
console.log(disemvowel('This website is for losers LOL!'))
// Ts wbst s fr lsrs LL!
