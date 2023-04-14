// * Dynamic Programming
// todo How to solve Algorithmic Problems and Coding Challenges

//  Fibonacci
// Recursive Approach
/* const Fibonacci = (n) => {
  if (n <= 2) return 1
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(5))
console.log(Fibonacci(10))
// use Memoization to improve performance
 */
// !
// * Linked list
class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
} 
class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.head.next.data)