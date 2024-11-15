/*
  ES5 reduce



*/

var euros = [29.76, 41.85, 46.5]

var sum = euros.reduce(function (total, amount) {
  return total + amount
})

console.log(sum) // 118.11

// We use const instead of var and we replace the word function with a “fat arrow” (=>) after the parameters, and we omit the word ‘return’.
