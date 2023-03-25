// * Dynamic Programming
// todo How to solve Algorithmic Problems and Coding Challenges

//  Fibonacci
// Recursive Approach
const Fibonacci = (n) => {
  if (n <= 2) return 1
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(5))
console.log(Fibonacci(10))
// use Memoization to improve performance
