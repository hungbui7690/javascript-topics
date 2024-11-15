/*
  Closure



*/

function outside(num) {
  var rememberedVar = num // rememberedVar is the lexical environment that the closure 'remembers'

  return function inside() {
    // This is the function which the closure 'remembers'
    console.log(rememberedVar)
  }
}

var remember1 = outside(7) // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside'
var remember2 = outside(9) // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside'

remember1() // This now executes the function 'inside' which console.logs(rememberedVar) => 7
remember2() // This now executes the function 'inside' which console.logs(rememberedVar) => 9

// Closures are useful because they let you ‘remember’ data and then let you operate on that data through returned functions. This allows javascript to emulate private methods that are found in other programming languages. Private methods are useful for restricting access to code as well as managing your global namespace.
