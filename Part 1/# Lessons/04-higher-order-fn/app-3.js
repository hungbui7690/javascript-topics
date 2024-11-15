/*
  How Higher Order Functions Work
  - So, suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.


*/

const radius = [1, 2, 3]

// logic to calculate area
const area = function (radius) {
  return Math.PI * radius * radius
}

// logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius
}

// a reusable function to calculate area, diameter, etc
const calculate = function (radius, logic) {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]))
  }
  return output
}

console.log(calculate(radius, area))
console.log(calculate(radius, diameter))

// Now, as you can see in the above code, we have only written a single function calculate() to calculate the area and diameter of the circle. We only need to write the logic and pass it to calculate() and the function will do the job.
// The code that we have written using HOFs is concise and modular. Each function is doing its own job and we are not repeating anything here.
// Suppose in the future if we want to write a program to calculate the circumference of the circle. We can simply write the logic to calculate the circumference and pass it to the calculate() function.

const circumference = function (radius) {
  return 2 * Math.PI * radius
}

console.log(calculate(radius, circumference))
