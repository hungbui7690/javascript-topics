/*
  Steps



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

addThree = curry((a, b, c) => a + b + c)

addThree(1)(2)(3) // 6
addThree(1, 2)(3) // ƒ ()
addThree(1)(2, 3) // ƒ ()
addThree(1, 2, 3) // ƒ ()

// No errors anymore, but we aren't successfully processing versions that pass more than one argument at a time. But that's an easy fix. We need to take ...args instead of arg.
