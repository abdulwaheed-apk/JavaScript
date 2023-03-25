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
const titleCaseAf = (str) => {
  arr = str.toLowerCase().split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  log('First ', arr)
  arr = arr.join(' ')
  log('Second ', arr)
}
titleCaseAf('abc def ghi duMMy hg ghdA t')
