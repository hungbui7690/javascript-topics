/*
  Private variables and methods
  - Closures can also be used to encapsulate private data/methods.



*/

const bankAccount = (initialBalance) => {
  const balance = initialBalance

  return {
    getBalance: function () {
      return balance
    },
    deposit: function (amount) {
      balance += amount
      return balance
    },
  }
}

const account = bankAccount(100)

account.getBalance() // 100
account.deposit(10) // 110

// In this example, we won’t be able to access balance from anywhere outside of the bankAccount function, which means we’ve just created a private variable. Where’s the closure? Well, think about what bankAccount() is returning. It actually returns an Object with a bunch of functions inside it, and yet when we call account.getBalance(), the function is able to “remember” its initial reference to balance. That is the power of the closure, where a function “remembers” its lexical scope (compile time scope), even when the function is executed outside that lexical scope.
