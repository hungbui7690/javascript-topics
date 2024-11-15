/*
  Map and Filter as Reductions
  - If you can use the reduce function to spit out an average then you can use it any way you want.
  - For example, you could double the total, or half each number before adding them together, or use an if statement inside the reducer to only add numbers that are greater than 10. My point is that the Reduce Method In JavaScript​ gives you a mini CodePen where you can write whatever logic you want. It will repeat the logic for each amount in the array and then return a single value.
  - The thing is, you don’t always have to return a single value. You can reduce an array into a new array.


-------------------

  - For instance, lets reduce an array of amounts into another array where every amount is doubled. To do this we need to set the initial value for our accumulator to an empty array.
  - The initial value is the value of the total parameter when the reduction starts. You set the initial value by adding a comma followed by your initial value inside the parentheses but after the curly braces (bolded in the example below).



*/

const average = euros.reduce((total, amount, index, array) => {
  total += amount
  return total / array.length
}, 0)

// In previous examples, the initial value was zero so I omitted it. By omitting the initial value, the total will default to the first amount in the array.
