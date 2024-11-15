/*
  Creating a Tally with the Reduce Method In JavaScript​
  - Use it when: You have a collection of items and you want to know how many of each item are in the collection.



*/

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
]

const count = fruitBasket.reduce((tally, fruit) => {
  // tally[fruit] = 1 // ❌
  tally[fruit] = (tally[fruit] || 0) + 1
  return tally
}, {})

count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// To tally items in an array our initial value must be an empty object, not an empty array like it was in the last example.
