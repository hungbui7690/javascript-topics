/*
  How Higher Order Functions Work
  - So, suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.


*/

const radius = [1, 2, 3]

// function to calculate area of the circle
const calculateArea = function (radius) {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i])
  }
  return output
}

// function to calculate diameter of the circle
const calculateDiameter = function (radius) {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i])
  }
  return output
}

console.log(calculateArea(radius))
console.log(calculateDiameter(radius))

// But have you noticed the problem with the above code? Aren't we writing almost the same function again and again with slightly different logic? Also, the functions we have written aren't reusable, are they?
