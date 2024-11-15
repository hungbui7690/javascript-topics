/*
  Emulating block-scoped variables.




*/

var funcs = []

var createFunction = function (val) {
  return function () {
    console.log('My value: ' + val)
  }
}

for (var i = 0; i < 3; i++) {
  funcs[i] = createFunction(i)
}
for (var j = 0; j < 3; j++) {
  funcs[j]() // My value is 0
  // My value is 1
  // My value is 2
}

// The late versions of javascript es6+ have a new keyword called let which can be used to give the variable a block scope. There are also many functions (forEach) and entire libraries (lodash.js) that are dedicated to solve such problems as the ones explained above. They can certainly boost your productivity, however it remains extremely important to have knowledge of all these issues when attempting to create something big.
// Closures have many special applications that are useful when creating large javascript programs.
// - Emulating private variables or encapsulation
// - Making Asynchronous server side calls
// - Creating a block-scoped variable.
