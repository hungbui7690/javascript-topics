/*
  How to use reduce() in JavaScript



*/

// Example 2: Using reduce() to find the maximum value in an array:
let numbers = [5, 20, 100, 60, 1]

const maxValue = numbers.reduce((max, curr) => {
  if (curr > max) max = curr
  return max
})

console.log(maxValue) // 100

// In this example, again we have two arguments max and curr in the callback function. Notice we haven't passed the second parameter in the reduce() method this time. So, the default value will be the first element in the array.
// The callback function first checks if the current element curr is greater than the current maximum value max. If it is, it updates the value of max to be the current element. If it is not, max is not updated. Finally, the function returns the value of max.
// In this case, the reduce() method will start by setting max to 5 and curr to 20. It will then check if 20 is greater than 5, which it is, so it updates max to 20.
// It will then set curr to 100 and check if 100 is greater than 20, which it is, so it updates max to 100.
// It will continue this process until it has processed all the elements in the array. The final value of max will be the maximum value in the array, which is 100 in this case.
