/*
  Example 1: A simple, three-parameter function


*/

// First, I’m going to create a simple function that accepts three parameters:
const add = (a, b, c) => {
  return a + b + c
}

console.log(add(2, 3, 5))

// What happened here is that this function is adding all the parameters of the numbers which we have passed.
// Now, this first example is just a simple function that accepts multiple parameters.
// How do I convert an existing function to a curried version?
