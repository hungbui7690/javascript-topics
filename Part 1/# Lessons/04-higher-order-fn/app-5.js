/*
  How to use map() in JavaScript
  - The map() function takes an array of values and applies a transformation to each value in the array. It does not mutate the original array. It is often used to transform an array of data into a new array with a different structure.



*/

// Example 2: Here we have an array of users. Suppose we only want their first and last name. We can simply use the map() method to extract it from the users array.
const users = [
  { firstName: 'John', lastName: 'Doe', age: 25 },
  { firstName: 'Jane', lastName: 'Doe', age: 30 },
  { firstName: 'Jack', lastName: 'Doe', age: 35 },
  { firstName: 'Jill', lastName: 'Doe', age: 40 },
  { firstName: 'Joe', lastName: 'Doe', age: 45 },
]

const result = users.map((user) => user.firstName + ' ' + user.lastName)
console.log(result) // ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', 'Joe Doe']

// In the above code, users is an array of objects representing users. Each object has three properties: firstName, lastName, and age.
// We are mapping over each user using the map() method to extract the properties firstName and lastName.
// The callback function takes a single argument user which represents an element in the users array (an object).
// The function concatenates the firstName and lastName properties of the user object, and returns the result.
