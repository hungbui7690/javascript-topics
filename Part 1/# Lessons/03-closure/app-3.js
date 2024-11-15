/*
  Closure
  - we have an outer function named <walk> and an inner function named <fly>


*/

function walk() {
  var dist = '1780 feet'

  function fly() {
    console.log('At ' + dist)
  }

  return fly
}

var flyFunc = walk() // calling walk returns the fly function which is being assigned to flyFunc
// we would expect that once the walk function above is run
// we would think that JavaScript has gotten rid of the 'dist' var

flyFunc() // 'At 1780 feet' -> still can use the function as above -> this is the power of closures
