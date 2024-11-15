/*
  Steps
  - <Arity> is the number of arguments a function accepts. This can be found by accessing the <.length> property on a function.


*/

const curry = (fn) => {
  const arity = fn.length // 2. Curry counts the number of arguments the function expects.
  return fn
}

const add = (a, b) => a + b

const curriedAdd = curry(add)

curriedAdd(1)(2) // ❌ TypeError: curriedAdd(...) is not a function
