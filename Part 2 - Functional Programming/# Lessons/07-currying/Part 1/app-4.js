/*
  Steps



*/

const curry = (fn) => {
  const arity = fn.length

  const previousArgs = []

  const accumulator = (arg) => {
    previousArgs.push(arg) // Keep track of the arguments.
  }
  return accumulator // 3. Curry returns an accumulator function.
}

const add = (a, b) => a + b

const curriedAdd = curry(add)

// 4. We call the accumulator with some or all of the arguments.
curriedAdd(1)(2) // ❌ TypeError: curriedAdd(...) is not a function
