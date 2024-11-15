/*
  How to use reduce() in JavaScript



*/

// Example 3: Using reduce() to merge different objects in a single object:
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const obj3 = { e: 5, f: 6 }

const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
  return { ...acc, ...curr }
}, {})

console.log(mergedObj) // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// In this example, we have two arguments acc and curr in the callback function. The acc represents the current merged object that has been created so far, while the curr represents the current object being processed in the array.
// The function uses the spread operator (...) to create a new object that combines the properties of the current merged object acc and the current object curr. It then returns this new object.
// In this case, the reduce() method will start by setting acc to an empty object (which is the value passed as the second argument to reduce()). It will then set curr to obj1, and create a new object that combines the properties of the empty object and obj1. It will then set curr to obj2 and create a new object that combines the properties of the previous merged object and obj2. It will continue this process until it has processed all the objects in the array.
// The final value of acc will be the merged object, which will contain all the properties of the original objects.
