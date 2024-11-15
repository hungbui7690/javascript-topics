/*
  Steps



*/

const curry = (fn) => {
  const arity = fn.length

  // It turns out we made a terrible mistake! We kept a single list of arguments in an outer closure, so we share a closure for all uses of the function. This means we can only use it one time, and if we tried to pass partial arguments to it several times, it would behave incorrectly -> see below
  const previousArgs = []
  const accumulator = (arg) => {
    previousArgs.push(arg)
    if (previousArgs.length < arity) return accumulator

    // 6. Run the function when we have enough arguments
    return fn(...previousArgs)
  }
  return accumulator
}

const add = curry((a, b) => a + b)

// Try to make two different functions
const addTwo = add(2) // ƒ accumulator()

// This doesn't return a function because of the shared accumulator.
const addThree = add(3) // 5

// 🌲 This is sort of the opposite of currying. Looking back at What is Currying section, there is some key language that describes the problem:
// A curried function returns another accumulator until it has all of the arguments...
// Each step of the currying process needs to have a unique set of arguments, so each step creates a reusable function. To do this, we'll need to pass our collection of arguments to each successive accumulator.
