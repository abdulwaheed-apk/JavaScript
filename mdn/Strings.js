const { log } = console

// const foo = new String('2 + 2')
// const bar = '2 + 2'
// console.log(eval(foo))
// console.log(eval(bar))
const hello = 'Hello, World!'
// hello[0] = 'j' // strings are immutable
// log(hello[0])
// log(hello.endsWith('World!'))
// log(hello.includes('Hello'.toUpperCase()))

// todo Title Case a Sentence
// ? Using map
/* log(titleCase('In publishing and graphic design'))
function titleCase(str) {
  const lowerCaseStr = str.toLowerCase()
  let lowerCaseArr = lowerCaseStr.split(' ')
  let titleCaseArr = lowerCaseArr.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  )
  let titleCaseSentence = titleCaseArr.join(' ')
  return titleCaseSentence
}
 */
// ? using for loop
/* const titleCaseAf = (str) => {
  arr = str.toLowerCase().split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  log('First ', arr)
  arr = arr.join(' ')
  log('Second ', arr)
}
titleCaseAf('abc def ghi duMMy hg ghdA t') */

//? clean map
/* function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase())
    })
    .join(' ')
}
log(titleCase("I'm a little tea pot"))
 */

//todo Date and time formatting

/* const today = new Date().toISOString().slice(0, 10)

// log('today --', today)
const newDate = new Date()
const myOptions = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short',
}
const dateFormatForUS = new Intl.DateTimeFormat('en-US', myOptions).format
const dateFormatForPK = new Intl.DateTimeFormat('en-PK', myOptions).format
log('for us =>', dateFormatForUS(newDate))
log('for pk =>', dateFormatForPK(newDate))
 */

// todo Number formatting (currency)
/* const inUS = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 3,
})
const inPK = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PKR',
  minimumFractionDigits: 3,
})

log(inUS.format(225.555))
log(inPK.format(225.555))
 */
// * Functions
// todo Rest parameters
/* function multiply(multiplier, ...any) {
  log(
    'Arguments object to check arguments, arguments[0] arguments[anyIndex]',
    arguments
  )
  return any.map((item) => item * multiplier)
}
log('multiply', multiply(3, 4, 20, 30)) // Here 3 is multiplier for rest of arguments */
function multiply2(multiplier, ...any) {
  // log(arguments)
  // log(arguments.length)
  // log(any)
  //? arguments.length-1 because 1st argument is multiplier
  for (let i = 0; i < arguments.length - 1; i++) {
    any[i] = any[i] * multiplier
  }
  return any
}
log(multiply2(2, 10, 20, 30, 40, 50))
