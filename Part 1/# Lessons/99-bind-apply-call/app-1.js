/*
  What is currying in JavaScript?
  - Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.
  - In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.


----------------

  Why should I use currying?
  - There are several reasons why currying is ideal:
    # Currying is a checking method to make sure that you get everything you need before you proceed
    # It helps you to avoid passing the same variable again and again
    # It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
    # It is used in functional programming to create a higher-order function
    # This could be personal preference, but I love that it makes my code readable

  

*/

// Currying is a function that accepts multiple arguments. It will transform this function into a series of functions, where every little function will accept one argument:
// @ Noncurried version
const add = (a, b, c) => {
  return a + b + c
}
console.log(add(2, 3, 5)) // 10

// @ Curried version
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}
console.log(addCurry(2)(3)(5)) // 10
