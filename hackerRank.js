function joinedLogger(level, sep) {
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

console.log(joinedLogger(15, ';'))
