/*
  Accept Multiple Arguments
  - I mentioned before that strict versions of curry accept only one argument at a time. 
  - This can be useful when you need to use the function in a place where you don't want all the arguments passed to it, like in Array.prototype.map(). 
  - Because the mapper receives three arguments – value, index, and array – it would misbehave if curry accepts multiple values.



*/

// We could go about this a couple of ways... we could use Function.prototype.bind() to set the first value, or we could use an another arrow function to provide a closure. I'm going with the arrow function to avoid setting a context.
const curry = (fn) => {
  const arity = fn.length

  const accumulator = (previousArgs) => (arg) => {
    const newArgs = [...previousArgs, arg] // @

    if (newArgs.length < arity) return accumulator(newArgs)

    // Run the function when we have enough arguments
    return fn(...newArgs)
  }
  // Start with no arguments passed.
  return accumulator([])
}

const multipliers = [2, 4, 6, 8]
const multiply = curry((a, b) => a * b)

const multiplierFns = multipliers.map(multiply)

// With one argument at a time:
// [ ƒ (), ƒ (), ƒ (), ƒ () ]

// Supporting multiple arguments:
// [ 0, 4, 12, 24 ]
