// ? Modify an Object Nested Within an Object

// Todo Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.
/* let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
}

// Only change code below this line
userActivity.data.online = 45
// Only change code above this line

console.log(userActivity) */

// ? Access Property Names with Bracket Notation
// Todo We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.

/* let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
}

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem]
  // Only change code above this line
}
// Here We have Passed Variable in bracket notation

console.log(checkInventory("apples"))
 */

// ? Use the delete Keyword to Remove Object Properties
// Todo Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
}

// Only change code below this line
delete foods.oranges
delete foods.plums
delete foods.strawberries
// Only change code above this line

console.log(foods) */

// ? Check if an Object has a Property
// Todo Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

/* let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
}

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Both of these would return true.

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  ) {
    return true
  } else {
    return false
  }
  // Only change code above this line
}

console.log(isEveryoneHere(users)) */

// ? Iterate Through the Keys of an Object with a for...in Statement
