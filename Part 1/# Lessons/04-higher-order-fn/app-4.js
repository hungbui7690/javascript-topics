/*
  How to Use Higher Order Functions
  - You can use higher order functions in a variety of ways.
    # When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.
    # When working with objects, you can use the Object.entries() function to create a new array from an object.
    # When working with functions, you can use the compose() function to create complex functions from simpler ones.


-----------------

  How to Use Some Important Higher Order Functions
  - There are various built in HOFs, and some of the most common ones are map(), filter() and reduce(). So let's understand each one of these in detail.


++++++++++++

  How to use map() in JavaScript
  - The map() function takes an array of values and applies a transformation to each value in the array. It does not mutate the original array. It is often used to transform an array of data into a new array with a different structure.



*/

// Example 1: Suppose we want to add 10 to every element in a array. We can use the map() method to map over every element in the array to add 10 to it.
const arr = [1, 2, 3, 4, 5]

const output = arr.map((num) => (num += 10))

console.log(arr) // [1, 2, 3, 4, 5]
console.log(output) // [11, 12, 13, 14, 15]

// In the above example, arr is an array with five elements: 1, 2, 3, 4, and 5. map is a method that we use to apply a function to each element in an array, and it returns a new array with the modified elements.
// The callback function that is being passed to map uses the arrow function syntax, and it takes a single argument num. This function adds 10 to num (every element in the array) and returns the result.
