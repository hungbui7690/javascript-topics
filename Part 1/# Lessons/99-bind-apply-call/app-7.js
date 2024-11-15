/*
  Steps


*/

const curry = (fn) => {
  const arity = fn.length
  const previousArgs = []
  const accumulator = (arg) => {
    previousArgs.push(arg)

    if (previousArgs.length < arity) return accumulator
    return fn(...previousArgs)
  }
  return accumulator
}

addThree = curry((a, b, c) => a + b + c)

addThree(1)(2)(3) // 6

addThree(7, 8, 9) // ❌ 6 -> 7 + 8 + 9 = 24 !== 6

addThree(1, 2)(3) // ❌ TypeError: addThree(...) is not a function
