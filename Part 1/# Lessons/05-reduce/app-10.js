/*
  Flattening an array of arrays with the Reduce Method In JavaScript​​
  - We can use reduce to flatten nested amounts into a single array.
  - We set the initial value to an empty array and then concatenate the current value to the total.


*/

const data = [
  { a: 'happy', b: 'robin', c: ['blue', 'green'] },
  { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
  { a: 'sad', b: 'goldfish', c: ['green', 'red'] },
]

// @ If we only need unique number then we can check to see of the number already exists in total before we push it.
const uniqueColors = data.reduce((total, amount) => {
  amount.c.forEach((color) => {
    if (total.indexOf(color) === -1) {
      total.push(color)
    }
  })
  return total
}, [])

uniqueColors // [ 'blue', 'red', 'green', 'black', 'orange']
