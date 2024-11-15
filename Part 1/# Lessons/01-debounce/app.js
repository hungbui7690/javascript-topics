/*
  Debounce in JavaScript
  - Debouncing is a programming technique that helps to improve the performance of web applications by limiting the frequency of function calls. In this blog post, we will learn what debouncing is, why it is useful, and how to implement it in JavaScript with code examples.

  🌲 Debouncing delays the execution of your code until the user stops performing a certain action for a specified amount of time. 
  🍖 Throttling limits the execution of your code to once in every specified time interval.


-------------------

  What is debouncing?
  - Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called. 
  - This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.


-------------------

  - For example, imagine we have a search box that shows suggestions as the user types. 
  - If we call a function to fetch suggestions on every keystroke, we might end up making too many requests to the server, which can slow down the application and waste resources. 
  - Instead, we can use debouncing to wait until the user has stopped typing for a while before making the request.


-------------------

  How to implement debouncing in JavaScript?
  - There are different ways to implement debouncing in JavaScript, but one common approach is to use a wrapper function that returns a new function that delays the execution of the original function. 
  - The wrapper function also keeps track of a timer variable that is used to clear or reset the delay whenever the new function is called.


-------------------

  Real life examples:
  - Submit button:When you click a submit button on a website, it doesn’t send the data immediately, but waits for a few milliseconds to see if you click it again. This way, it prevents accidental double submissions and errors.
  - Elevator: When you press the button to call the elevator, it doesn’t move immediately, but waits for a few seconds to see if anyone else wants to get on or off. This way, it avoids going up and down too frequently and saves energy and time.
  - Search box: When you type something in a search box, it doesn’t show suggestions on every keystroke, but waits until you stop typing for a while. This way, it avoids making too many requests to the server and improves the performance and user experience.
  - Resize Events: Prevent multiple recalculations during window resizing, which can slow down your application.
  - Scroll Events: Optimize tasks like infinite scrolling or lazy loading, ensuring that they only trigger after scrolling has stopped.


-------------------

  - Debouncing is a useful technique to optimize web applications by reducing unnecessary or repeated function calls that might affect the performance or user experience. 
  - We can implement debouncing in JavaScript by using a wrapper function that returns a new function that delays the execution of the original function until a certain amount of time has passed since the last call.


-------------------

  - Debouncing is a clever technique in JavaScript that acts like a calming influence on your functions, helping them take a breather. Imagine you’re constantly asking someone to do something very quickly, and they start rushing, maybe even making mistakes. Debouncing steps in and says, “Hold on, let’s not rush. Let’s give ourselves a moment to think and do it right.” This means instead of reacting to every tiny movement or action instantly, your functions wait a bit before responding. It’s like telling your functions, “Take it easy, there’s no hurry. Do it well when you’re ready.”

  - This approach is incredibly helpful when dealing with lots of quick actions, like typing in a search box or moving your mouse around. It prevents your program from getting overwhelmed and ensures that actions are carried out smoothly and efficiently. Think of it as giving your functions a break, allowing them to perform better and make fewer mistakes. So, next time you’re working on a project and you notice things happening too fast, remember debouncing. It’s your secret weapon for keeping your application calm, collected, and running like a dream.



*/

const searchInput = document.getElementById('search')

const debounce = (mainFunction, delay) => {
  let timer

  // Return an anonymous function that takes in any number of arguments -> Debounce version
  return (...args) => {
    clearTimeout(timer) // Clear any existing timers

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      mainFunction(...args)
    }, delay)
  }
}

function handleSearch(event) {
  console.log('Searching for:', event.target.value)
}

const debouncedSearch = debounce(handleSearch, 300)

searchInput.addEventListener('input', debouncedSearch)

/*
  Explanation:
  - let timer: Declares a variable to hold the timer.
  - return function(…args) {…}: Returns a new function that wraps the original function.
  - clearTimeout(timer): Clears any existing timer.
  - timer = setTimeout(() => {…}, delay): Sets a new timer that will call the original function after the specified delay.


-------------------

  - Now, whenever we call debouncedSearchData, it will not execute searchData immediately, but wait for 3 seconds. 
  - If debouncedSearchData is called again within 3 seconds, it will reset the timer and wait for another 3 seconds. 
  - Only when 3 seconds have passed without any new calls to debouncedSearchData, it will finally execute searchData.
*/
