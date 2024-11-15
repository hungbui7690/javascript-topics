/*
  Closure



*/

function createPerson(name) {
  let username = name

  return {
    getName: function () {
      return username.toUpperCase()
    },
  }
}

const person = createPerson('John')

console.log(person.getName()) // Output: JOHN
console.log(person.username) // Output: undefined -> can not access the username variable directly

// In this example, the createPerson function creates a closure by returning an object with a getName method. The username variable is only accessible through the getName method, making it private and encapsulated within the closure.
// Closures are a powerful concept in Javascript that allows functions to retain access to variables from their parent scope. They provide a way to encapsulate data and behavior, enabling advanced techniques such as memoizing, currying, implementing higher-order functions, callbacks and more. Understanding closures will enhance your Javascript skills and empower you to write more robust and efficient code.
