/*
  Map and Filter as Reductions



*/

const euro = [29.76, 41.85, 46.5]

const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount)
  }
  return total
}, [])

above30 // [ 41.85, 46.5 ]

// These operations are the map and filter methods rewritten as a reduce method.
// For these examples, it would make more sense to use map or filter because they are simpler to use. The benefit of using reduce comes into play when you want to map and filter together and you have a lot of data to go over.
// If you chain map and filter together you are doing the work twice. You filter every single value and then you map the remaining values. With reduce you can filter and then map in a single pass.
// Use map and filter but when you start chaining lots of methods together you now know that it is faster to reduce the data instead.
