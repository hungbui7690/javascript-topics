/*
  Finding an Average with the Reduce Method In JavaScript​
  - Instead of logging the sum, you could divide the sum by the length of the array before you return a final value.
  - The way to do this is by taking advantage of the other arguments in the reduce method. The first of those arguments is the index. Much like a for-loop, the index refers to the number of times the reducer has looped over the array. The last argument is the array itself.



*/

const euros = [29.76, 41.85, 46.5]

// @ 4 params
const average = euros.reduce((total, amount, index, array) => {
  total += amount

  if (index === array.length - 1) {
    return total / array.length
  } else {
    return total
  }
})

average // 39.37
