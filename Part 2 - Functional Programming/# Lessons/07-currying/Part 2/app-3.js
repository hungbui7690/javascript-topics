/*
  Example 2: Converting an existing function into a curried function
  - In the first example, we created a function addCurry that accepted three arguments a, b, and c, added their sum a+b+c, (2)+(3)+(5), and returned the output as 10.
  - This second example showed how we implemented the same function but with a curried version that takes one argument a and returns a function that takes another argument b, which returns a function that takes another argument c, and that function returns their sum, which gave us the same output as example one: 10.
  - What we have done here is a nested function, so each of these functions takes one argument that returns another argument and the function doesn’t complete until it receives all parameters.



*/

const add = (a, b, c) => {
  return a + b + c
}

const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}

console.log(addCurry(2)(3)(5)) // 10
