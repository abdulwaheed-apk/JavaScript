function isPalindrome(str) {
  // Step 1- Put a pointer at each extreme of the str
  // Step 2 - Iterate the string "inwards"
  // Step 3 - At each iteration, check if the pointers represent equal values
  // If this condition isn't accomplished, the str isn't a palindrome
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }

  return true
}

console.log(isPalindrome("neuquen")) // true
console.log(isPalindrome("Buenos Aires")) // false
