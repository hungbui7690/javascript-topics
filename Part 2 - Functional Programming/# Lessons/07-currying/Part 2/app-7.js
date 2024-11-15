/*
  Modern currying with ES6



*/

const sendRequest = (greet) => (name) => (message) =>
  `${greet} ${name}, ${message}`

sendRequest('Hello')('John')('How are you?') // Output: 'Hello John, How are you?'
