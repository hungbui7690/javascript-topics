/*
  Closure
  - Closures are one of the most important Javascript concepts which makes the language more powerful. 
  - Closures allow functions to retain access to variables from their parent scope, even after the parent function has finished executing. 
  - They provide a powerful way to encapsulate data enabling advanced programming techniques like memoizing, currying, implementing higher-order functions, callbacks and more. 
  - Before diving further I would recommend you go over the Scope & Scope Chaining concept which will help you understand the closure.


-------------------

  What are Closures?
  - A closure is a combination of a function enclosed with references to its lexical environment (surrounding state). In Javascript, closures are created every time a function is created.
  - Consider a function declared inside another function then the inner function forms the Closure with its parent (outer) function. This means that the inner function has access to its scope, its parent function scope and even the global scope.


-------------------

  Why Closures Are Useful?
  - Data Privacy : Closures allow you to create private variables and functions that are not accessible from the outside. This concept is crucial for building robust and modular code.
  - Memoisation : Closures enable the creation of function factories that generate customized functions (memoised functions) with preset values. Each generated function retains its own set of variables.
  - Asynchronous Operations : Closures help preserve the state of variables in asynchronous operations, such as callbacks and event handlers. They ensure that the correct values are available when the function is invoked after any async operation is done.


  🌲 Due to the closures, Javascript gets the power to implement the code in a more robust way allowing programmers to generate effective design patterns which makes the code more efficient.



*/

function appCounter(start) {
  let count = start - 1

  return function () {
    return ++count
  }
}

const counter = appCounter(10)
console.log(counter()) // Output: 10
console.log(counter()) // Output: 11

// Here, the appCounter function creates a closure by returning an inner function. The inner function retains access to the count variable even after appCounter has finished executing. Each time counter is invoked, it increments and returns the count value.
