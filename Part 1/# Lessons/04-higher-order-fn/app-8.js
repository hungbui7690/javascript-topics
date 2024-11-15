/*
  How to use reduce() in JavaScript
  - The reduce() method is kind of overwhelming. If you have came across reduce() method before and haven't understood it at first, it's totally fine.
  - But don't worry – here, we will learn it through quite a few examples and I will try my best to make you understand this method.
  - Now, one doubt that might comes to your mind is why we use the reduce() method. As there are already lots of methods, how can we decide which one to use and when?


----------------

  - In the case of the reduce() method, you should is used it when you want to perform some operation on the elements of an array and return a single value as a result. The "single value" refers to the accumulated result of repeatedly applying a function to the elements of a sequence.
  - For example, you might use reduce() to sum up all the elements in an array, to find the maximum or minimum value, to merge multiple objects into a single object, or to group different elements in an array.



*/

// Example 1: Using reduce() to sum up all the elements in an array:
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((total, currentValue) => {
  return total + currentValue
}, 0)

console.log(sum) // 15

// In this example, the reduce() method is called on the numbers array and is passed a callback function that takes two arguments: total and currentValue.
// The total argument is the accumulation of the values that have been returned from the function so far, and the currentValue is the current element being processed in the array.
// The reduce() method also takes an initial value as the second argument, in this case 0, which is used as the initial value of total for the first iteration.
// In each iteration, the function adds the current value to the total and returns the new value of the total.
// The reduce() method then uses the returned value as the total for the next iteration, until it has processed all the elements in the array.
// Finally, it returns the final value of the total, which is the sum of all the elements in the array.
