/*
  Steps


*/

// 1. We pass a function to curry.
const curry = (fn) => fn

const add = (a, b) => a + b

const curriedAdd = curry(add)

curriedAdd(1)(2) // ❌ TypeError: curriedAdd(...) is not a function
