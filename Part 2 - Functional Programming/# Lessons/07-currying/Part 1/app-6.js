/*
  Steps



*/

const curry = (fn) => {
  const arity = fn.length

  const previousArgs = []

  const accumulator = (arg) => {
    previousArgs.push(arg)
    if (previousArgs.length < arity) return accumulator

    // 6. Run the function when we have enough arguments
    return fn(...previousArgs)
  }
  return accumulator
}

const add = (a, b) => a + b

const curriedAdd = curry(add)

curriedAdd(1)(2) // ❌ TypeError: curriedAdd(...) is not a function
