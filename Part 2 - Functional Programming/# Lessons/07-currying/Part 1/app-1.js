/*
  What is Currying
  - Currying is an important part of functional programming, and a great example of higher-order functions.
  - Broadly speaking, currying creates a collector or accumulator of function arguments. A curried function returns another accumulator until it has all of the arguments needed to execute the function. Currying is a specific form of partial application.


*/

const add = (a, b) => a + b

const curriedAdd = curry(add)

curriedAdd(1)(2)
