/*
  What is Throttling?
  - Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

  - For example, if you have a function that fetches some data from an API every time the user scrolls the page, you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls. This way, you can avoid overloading the server or the browser with unnecessary requests and reduce the bandwidth consumption.


-------------------

  How to Implement Throttling in JavaScript?
  - There are several ways to implement throttling in JavaScript. One common approach is to use a timer function such as setTimeout or difference of time method (old method) to wrap the function being throttled. The timer function can be used to enforce a delay between calls to the throttled function, allowing it to be called only once within the specified time period.


-------------------

  Why Use Throttling?
  - Throttling can improve the performance and user experience of web pages by reducing the number of unnecessary or redundant operations. It can also prevent some issues such as:
    # Overloading the server or the browser with too many requests or calculations
    # Exceeding the rate limits or quotas of APIs or services
    # Wasting bandwidth or resources on operations that are not visible or relevant to the user
    # Creating janky or laggy animations or interactions

  
-------------------

  Non Tech Example of throttling:
  - Changing speed of Fan
    # When changing speed of fan, it takes few seconds to reach at the desired speed. Thus before changing the speed again, we need to wait for few seconds so the fan reaches at a steady state.


-------------------

  When to Use Throttling?
  - Throttling is suitable for scenarios where you want to limit how often a function can be called, but you don’t want to miss any calls. For example, you might want to use throttling for:
    # Fetching data from an API or a database when the user scrolls, resizes, or types
    # Updating or animating elements on the page when the user scrolls, resizes, or moves the mouse
    # Logging or tracking user actions or events when they occur frequently


-------------------

  - Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations. Throttling can be implemented in JavaScript using timer functions such as setTimeout or setInterval. Throttling is suitable for scenarios where you want to limit how often a function can be called, but you don’t want to miss any calls.



*/

function throttle(mainFunction, delay) {
  let timerFlag = null

  // @ Throttle version
  return (...args) => {
    // if there is no timer running
    if (timerFlag === null) {
      mainFunction(...args)

      // set a timer to clear the timerFlag after the specified delay
      timerFlag = setTimeout(() => {
        timerFlag = null // clear the timerFlag to allow the main function to be executed again
      }, delay)
    }
  }
}

function fetchData() {
  console.log('Fetching data...')
  setTimeout(() => {
    console.log('Data fetched!')
  }, Math.random() * 1000)
}

const throttledFetchData = throttle(fetchData, 5000)

window.addEventListener('scroll', throttledFetchData)

/*
  - In this example, we define a throttle function that takes a callback and a delay as arguments. The throttle function returns a new function that wraps the callback with a logic that uses setTimeout to create a timer. The timer ensures that the callback is only called once within the delay period. If the returned function is called again before the timer expires, it does nothing.

  - We then define a fetchData function that simulates an API call with a random delay. We use the throttle function to create a throttledFetchData function that has a delay of 5000 ms. We add an event listener to the window scroll event that calls the throttledFetchData function.

  - If you run this code and scroll the page, you will see that the fetchData function is only called once every 5 second, regardless of how fast or slow you scroll.


*/
