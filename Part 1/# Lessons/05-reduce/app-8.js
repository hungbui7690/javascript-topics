/*
  Flattening an array of arrays with the Reduce Method In JavaScript​​
  - We can use reduce to flatten nested amounts into a single array.
  - We set the initial value to an empty array and then concatenate the current value to the total.


*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const flat = data.reduce((total, amount) => {
  return total.concat(amount)
}, [])

flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
