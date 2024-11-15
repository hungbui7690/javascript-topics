/*
  Closure



*/

function by(propName) {
  return function (a, b) {
    return a[propName] - b[propName]
  }
}

const person1 = { name: 'joe', height: 72 }
const person2 = { name: 'rob', height: 70 }
const person3 = { name: 'nicholas', height: 66 }

const people = [person1, person2, person3]

const sortedPeople = people.sort(by('height'))
// [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]

// 🍖 The closure ‘remembers’ the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.
