/*
  Advanced currying techniques
  - In the example above, we created a function that requires a fixed number of parameters.
  - It receives a function curry as the outer function. This function is a wrapper function. It returns another function named curried, which receives an argument with the spread operator ( ...args), and it compares the function length fn length.
  - The function length means that whatever the number of parameters we pass here, it will reflect in the length property of the function.
  - But the argument will increase every time. If the number of the parameters we need is not equal, it is going to return curried. If we call bind, this creates a new function and we pass the ( ...args).
  - N.B., bind creates a new function.


--------------------

  - fn.length



*/

const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args)
    }

    return fn(...args)
  })
}

const totalNum = (x, y, z) => {
  return x + y + z
}

const curriedTotal = curry(totalNum)
console.log(curriedTotal(10)(20)(30)) // 60
