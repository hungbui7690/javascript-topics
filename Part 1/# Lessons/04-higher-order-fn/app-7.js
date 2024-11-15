/*
  How to Use filter() in JavaScript
  - The filter() function takes an array and returns a new array with only the values that meet certain criteria. It also does not mutate the original array. It is often used to select a subset of data from an array based on certain criteria.



*/

// Example 2: You can use filter() to return only the users having age greater than 30 in an array.
const users = [
  { firstName: 'John', lastName: 'Doe', age: 25 },
  { firstName: 'Jane', lastName: 'Doe', age: 30 },
  { firstName: 'Jack', lastName: 'Doe', age: 35 },
  { firstName: 'Jill', lastName: 'Doe', age: 40 },
  { firstName: 'Joe', lastName: 'Doe', age: 45 },
]

// Find the users with age greater than 30
const output = users.filter(({ age }) => age > 30)

console.log(output) // [{firstName: 'Jack', lastName: 'Doe', age: 35}, {firstName: 'Jill', lastName: 'Doe', age: 40}, {firstName: 'Joe', lastName: 'Doe', age: 45}]

// In the above code, users is an array of objects representing users. Each object has three properties: firstName, lastName, and age.
// filter is called on the users array and it applies a callback function to each element in the array.
// The function takes a single argument, an object destructured to a single property age. This function checks if age is greater than 30. If it is, the function returns true, otherwise it returns false.
// When filter is called on users, it applies this function to each element in the array, creating a new array with only the elements that returned true when passed to the function and returns the result. The original users array remains unchanged.
