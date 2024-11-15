/*
  Steps


*/

const curry = (fn) => fn // 1. We pass a function to curry.

const add = (a, b) => a + b

const curriedAdd = curry(add) // 2.

curriedAdd(1)(2) // ❌ TypeError: curriedAdd(...) is not a function
