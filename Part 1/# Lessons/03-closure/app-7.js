/*
  Emulating block-scoped variables.
  - Javascript did not have a concept of block-scoped variables. 
  - Meaning that when defining a variable inside a for-loop for example, this variable is visible from outside the for-loop as well. 
  - So how can closures help us solve this problem ? Let’s take a look.



*/

var funcs = []

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    console.log('My value is ' + i) //creating three different functions with different param values.
  }
}

for (var j = 0; j < 3; j++) {
  funcs[j]() // My value is 3
  // My value is 3
  // My value is 3
}

// Since the variable i does not have block-scope, it’s value within all three functions was updated with the loop counter and created malicious values. Closure can help us solve this issue by creating a snapshot of the environment the function was in when it was created, preserving its state.
