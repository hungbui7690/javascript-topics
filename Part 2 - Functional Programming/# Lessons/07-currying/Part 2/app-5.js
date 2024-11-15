/*
  Basic currying techniques



*/

// Basic currying
const getPanCakeIngredients = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`
    }
  }
}

const ingredients = getPanCakeIngredients('Egg')('flour')('milk')
console.log(ingredients)

// This code example is a basic way of implementing currying.
// In the above example, we created a function getPanCakeIngredients that takes ingredient 1 as a single argument and returns a series of functions that contain the other ingredients we need to make the pancake.

// The function isn’t complete until it receives all parameters, which means if the ingredients for the pancake are not complete, the function won’t return any good result.
