/*
  Emulating private variables.
  - Unlike many other languages, Javascript does not have a mechanism which allows you to create encapsulated instance variables within an object. Having public instance variables can cause a lot of problems when building medium to large programs. However with closures, this problem can be mitigated.

  - Much like in the previous example, you can build functions which return object literals with methods that have access to the object’s local variables without exposing them. Thus, making them effectively private.

  - Closures can also help you manage your global namespace to avoid collisions with globally shared data. Usually all global variables are shared between all scripts in your project, which will definitely give you a lot of trouble when building medium to large programs. That is why library and module authors use closures to hide an entire module’s methods and data. This is called the module pattern, it uses an immediately invoked function expression which exports only certain functionality to the outside world, significantly reducing the amount of global references.



*/

function myModule() {
  let privateVariable = 'I am a private variable'

  let method1 = function () {
    console.log('I am method 1')
  }
  let method2 = function () {
    console.log('I am method 2, ', privateVariable)
  }

  return {
    method1: method1,
    method2: method2,
  }
}

const methods = myModule()

methods.method1() // I am method 1
methods.method2() // I am method 2, I am a private variable

// Closures are useful for capturing new instances of private variables contained in the ‘remembered’ environment, and those variables can only be accessed through the returned function or methods.
