/*
  Higher Order Functions
  - A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
  - There are several different types of higher order functions like map and reduce. We will discuss these later in this tutorial. But before that let's first dive deep into what higher order functions are.



*/

// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log('I am  a callback function')
}

// higher order function
function higherOrderFunction(func) {
  console.log('I am higher order function')
  func()
}

higherOrderFunction(callbackFunction)

// In the above code higherOrderFunction() is an HOF because we are passing a callback function as a parameter to it.
// The above example is quite simple isn't it? So let's expand it further and see how you can use HOFs to write more concise and modular code.
