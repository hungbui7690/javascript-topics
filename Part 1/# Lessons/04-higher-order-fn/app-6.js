/*
  How to Use filter() in JavaScript
  - The filter() function takes an array and returns a new array with only the values that meet certain criteria. It also does not mutate the original array. It is often used to select a subset of data from an array based on certain criteria.



*/

// Example 1: You can use filter() to return only the odd numbers from an array of numbers.
const arr = [1, 2, 3, 4, 5]

const output = arr.filter((num) => num % 2) // filter out odd numbers

console.log(arr) // [1, 2, 3, 4, 5]
console.log(output) // [1, 3, 5]

// In the above code, arr is an array with five elements: 1, 2, 3, 4, and 5. filter is a method that is used to create a new array with elements that pass a test specified in a provided callback function.
// This callback function checks if num is odd by checking if it is not divisible by 2 (num % 2). If num is not divisible by 2, the function returns true, otherwise it returns false.
// When filter is called on arr, it applies this function to each element in the array, creating a new array with only the elements that returned true or passed the specified condition when passed to the function. The original arr remains unchanged and returns the result.
