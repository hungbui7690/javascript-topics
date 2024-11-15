/*
  Example 3: Creating a friend request curry function



*/

function sendRequest(greet) {
  return function (name) {
    return function (message) {
      return `${greet} ${name}, ${message}`
    }
  }
}

const result = sendRequest('Hello')('John')(
  'Please can you add me to your Linkedin network?'
)
console.log(result)

// We created a function sendRequest that requires only one argument, greet, and it returns the name of the person and the message we want to send to the user. Then, when we invoked the function, it outputted the message.
