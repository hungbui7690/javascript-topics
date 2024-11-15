/*
  Map and Filter as Reductions



*/

const euros = [29.76, 41.85, 46.5]

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2)
  return total
}, [])

doubled // [59.52, 83.7, 93]

// By setting the initial value to an empty array we can then push each amount into the total. If we want to reduce an array of values into another array where every value is doubled, we need to push the amount * 2. Then we return the total when there are no more amounts to push.
// We’ve created a new array where every amount is doubled. We could also filter out numbers we don’t want to double by adding an if statement inside our reducer.
