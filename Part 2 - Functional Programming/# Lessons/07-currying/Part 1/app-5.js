/*
  Steps



*/

const curry = (fn) => {
  const arity = fn.length

  const previousArgs = []

  const accumulator = (arg) => {
    previousArgs.push(arg)

    // 5. returns an accumulator until all of the expected arguments of the original function are provided.
    if (previousArgs.length < arity) return accumulator
  }

  return accumulator
}

const add = (a, b) => a + b

const curriedAdd = curry(add)

curriedAdd(1)(2) // ❌ TypeError: curriedAdd(...) is not a function
