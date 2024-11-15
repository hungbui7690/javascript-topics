/*
  Steps


*/

const curry = (fn) => {
  const arity = fn.length
  const previousArgs = []
  const accumulator = (arg) => {
    previousArgs.push(arg)

    // 5. Curry returns an accumulator until all of the expected arguments of the original function are provided.
    if (previousArgs.length < arity) return accumulator
  }
  return accumulator
}

const add = (a, b) => a + b

const curriedAdd = curry(add)

curriedAdd(1)(2) // 🌲 undefined

// Well, we aren't throwing an error anymore, but we aren't running the original function, either. Our code should probably do that at some point...
