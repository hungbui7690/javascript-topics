/*
  How to use reduce() in JavaScript


----------------

  Benefits of Higher Order Functions
  - Using higher order functions has some important benefits for web developers.
  - First, higher order functions can help improve the legibility of your code by making it more concise and easy to understand. This can help speed up the development process and make it easier to debug code.
  - Second, higher order functions can help organize your code into smaller chunks, making it easier to maintain and extend.



*/

// Example 4: Using reduce() to group objects in an array. For example, grouping products in a shopping cart according to their brand name.
const shoppingCart = [
  { name: 'Apple', price: 1.99, quantity: 3 },
  { name: 'Apple', price: 1.99, quantity: 3 },
  { name: 'Xiaomi', price: 2.99, quantity: 2 },
  { name: 'Samsung', price: 3.99, quantity: 1 },
  { name: 'Tesla', price: 3.99, quantity: 1 },
  { name: 'Tesla', price: 4.99, quantity: 4 },
  { name: 'Nokia', price: 4.99, quantity: 4 },
]

const products = shoppingCart.reduce((productGroup, product) => {
  const name = product.name
  if (productGroup[name] == null) {
    productGroup[name] = []
  }
  productGroup[name].push(product)

  return productGroup
}, {})

console.log(products)
/*
  OUTPUT
  {
    Apple: [
      { name: 'Apple', price: 1.99, quantity: 3 },
      { name: 'Apple', price: 1.99, quantity: 3 }
    ],
    Xiaomi: [ { name: 'Xiaomi', price: 2.99, quantity: 2 } ],
    Samsung: [ { name: 'Samsung', price: 3.99, quantity: 1 } ],
    Tesla: [
      { name: 'Tesla', price: 3.99, quantity: 1 },
      { name: 'Tesla', price: 4.99, quantity: 4 }
    ],
    Nokia: [ { name: 'Nokia', price: 4.99, quantity: 4 } ]
  }
*/

// In this example, we have shoppingCart array representing different products and two arguments productGroup and product in the callback function.
// The productGroup argument represents the current group of products that have been found so far, while the product argument represents the current product being processed in the array.
// The function first gets the name of the current product using product.name. It then checks if there is already a group for this product name in the productGroup object using the if statement. If there is not, it creates a new group by initializing the productGroup[name] property to an empty array.
// Finally, the function pushes the current product into the group using the push() method, and returns the updated productGroup object
// After the reduce() method has processed all the elements in the shoppingCart array, the resulting productGroup object will contain keys for each product name, and values that are arrays of products with that name.
