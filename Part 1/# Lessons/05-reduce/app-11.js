/*
  Piping with Reduce
  - An interesting aspect of the reduce method in JavaScript is that you can reduce over functions as well as numbers and strings.
  - Let’s say we have a collection of simple mathematical functions. these functions allow us to increment, decrement, double and halve an amount.



*/

const increment = (input) => input + 1
const decrement = (input) => input - 1
const double = (input) => input * 2
const halve = (input) => input / 2

let pipeline = [increment, increment, increment, double, decrement, halve] // @

// @
const result = pipeline.reduce(function (total, func) {
  return func(total)
}, 1)

console.log(result) // 3.5
