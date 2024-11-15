/*
  Piping with Reduce
  - An interesting aspect of the reduce method in JavaScript is that you can reduce over functions as well as numbers and strings.
  - Let’s say we have a collection of simple mathematical functions. these functions allow us to increment, decrement, double and halve an amount.


----------------

  Silly Mistakes to avoid
  - If you don’t pass in an initial value, reduce will assume the first item in your array is your initial value. This worked fine in the first few examples because we were adding up a list of numbers.
  - If you’re trying to tally up fruit, and you leave out the initial value then things get weird. Not entering an initial value is an easy mistake to make and one of the first things you should check when debugging.
  - Another common mistake is to forget to return the total. You must return something for the reduce function to work. Always double check and make sure that you’re actually returning the value you want.



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
