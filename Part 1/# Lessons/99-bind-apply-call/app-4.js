/*
  Steps


*/

const curry = (fn) => {
  const arity = fn.length

  // 3. Curry returns an accumulator function.
  const previousArgs = []
  const accumulator = (arg) => {
    previousArgs.push(arg) // Keep track of the arguments.
  }
  return accumulator
}

// 4. We call the accumulator with some or all of the arguments.
// This is actually already covered by our tests in the previous step, so no new code for this one.

const add = (a, b) => a + b

const curriedAdd = curry(add)

curriedAdd(1)(2) // ❌ TypeError: curriedAdd(...) is not a function
