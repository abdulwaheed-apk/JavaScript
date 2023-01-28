// ! Destructuring of Console
const { log } = console

// ? Task 1

//!todo We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
/* let yourArray
yourArray = [
  "Hello",
  4,
  [1, 2, 3, true],
  { name: "Abdul Waheed", username: "abdulwaheed-apk" },
  23,
  false,
]

// log(yourArray)
*/

// ? Task 2

/* let myArray = ["a", "b", "c", "d"]
// Only change code below this line
myArray[1] = "I am Changed"
// Only change code above this line
log(myArray) */

// ? Task 3 Add Items to an Array with push() and unshift()

/* function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three")
  arr.push(7, "VIII", 9, { name: "jony", age: 20 })
  // Only change code above this line
  return arr
}

log(mixedNumbers(["IV", 5, "six"])) */

// ? Task 4 Remove Items from an Array with pop() and shift()

/* function popShift(arr) {
  let popped = arr.pop() // Change this line
  let shifted = arr.shift() // Change this line
  return [shifted, popped]
}

log(popShift(["challenge", "is", "not", "complete"])) */

// ? Task 5 Remove Items Using splice()

// todo We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

/* function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
  return arr
}

log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
)
 */

// ? Copy Array Items Using slice()

// Todo We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.

/* function forecast(arr) {
  return arr.slice(2, 4)
}
log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])) */

// ? Copy an Array with the Spread Operator

// todo We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

/* function copyMachine(arr, num) {
  let newArr = []
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr])
    // Only change code above this line
    num--
  }
  return newArr
}

log(copyMachine([true, false, true], 2)) */

// ? Combine Arrays with the Spread Operator

// Todo We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

// ? Iterate Through All an Array's Items Using For Loops

// todo We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
  let newArr = []
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i])
    }
  }

  // Only change code above this line
  return newArr
}

log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    6
  )
)
log(
  filteredArray(
    [
      ["amy", "beth", "sam"],
      ["dave", "sean", "peter"],
      [1, 2, 3],
    ],
    "peter"
  )
)
// ? Nested Array

/* let myNestedArray = [
  // Only change code below this line
  [
    "unshift",
    ["deep", [false, "deeper", [1, "deepest", 8]], ["complex", "nested"]],
  ],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array"],
  ["mutate", 1327.98, "splice", "slice", "push"],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
  // Only change code above this line
]
 */
