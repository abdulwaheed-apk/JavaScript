//? 1. Two Sum
/* var twoSum = function (nums, target) {
  //return indices of the two numbers such that they add up to target.
  // * Algo
  // sort array assenting
  // find first element which is >= target
  // slice array before >= element
  //iterate through new array
  //in iteration apply recursive function that calculate sum of current index and next index
  //  break when num[current] + num[next] === target , get index and return in array i.e. current and next
  // nums.sort((a, b) => a - b)
  // let middle = nums.length / 2
  // console.log(middle)
  // if (nums[middle] >= target) {
  //   console.log(nums)
  //   let newArr = nums.slice(0, middle)
  //   console.log(newArr)
  // }
  // if (nums[middle] < target) {
  //   let newMiddle = nums.length - 1 - middle
  //   // console.log(newMiddle)
  //   // console.log(nums[newMiddle])
  // } 

  let index = nums.indexOf(nums.find((elem) => elem >= target))
  //   let elemIndex = nums.indexOf(element)
  let newArr = nums.slice(0, index)
  for (let i = 0; i < newArr.length; i++) {
    function sum(current, next) {
      let indicesArr = []
      let indices
      if (current + next === target) {
        indices = indicesArr.push(newArr.indexOf(current), newArr.indexOf(next))
        return indices
      }
      return indices
    }
    console.log(sum(newArr[i], newArr[i + 1]))
  }
}

twoSum([2, 7, 5, 11, 15], 9)
 */
// !
/* var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
      i--
    }
  }

  return nums.length
}
console.log(removeDuplicates([1, 1, 2])) */
// !
/* var mergeTwoLists = function (list1, list2) {
  let arr = list1.concat(list2).sort()
  return arr
}

// Input: list1 = [1,2,4], list2 = [1,3,4]  Output: [1,1,2,3,4,4]
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) */
