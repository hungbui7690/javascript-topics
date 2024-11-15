/*
  Currying can be used to manipulate the DOM in Javascript



*/

const updateElemText = (id) => (content) =>
  (document.querySelector(`#${id}`).textContent = content)

const updateHeaderText = updateElemText('header')

updateHeaderText('Hello Joe!') // update the header text from "Hello John" to "Hello Joe Doe!"
