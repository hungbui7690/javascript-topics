/*
  Flattening an array of arrays with the Reduce Method In JavaScript​​
  - We can use reduce to flatten nested amounts into a single array.
  - We set the initial value to an empty array and then concatenate the current value to the total.


*/

// @ More often than not, information is nested in more complicated ways. For instance, lets say we just want all the colors in the data variable below.
const data = [
  { a: 'happy', b: 'robin', c: ['blue', 'green'] },
  { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
  { a: 'sad', b: 'goldfish', c: ['green', 'red'] },
]

// @ We’re going to step through each object and pull out the colors. We do this by pointing amount.c for each object in the array. We then use a forEach loop to push every value in the nested array into out total.
const colors = data.reduce((total, amount) => {
  amount.c.forEach((color) => {
    total.push(color)
  })
  return total
}, [])

colors //['blue','green','green','black','orange','blue','green','red']
