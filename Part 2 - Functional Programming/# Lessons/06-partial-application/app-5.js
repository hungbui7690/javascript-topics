/*
  Manual Partial Application
  - In practice, you’ll use utilities like partial whenever you need to use partial application. But, for the sake of illustration, let’s try to do this ourselves.


*/

function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`
}

// This function accepts a scheme, and returns another function.
function fixUriScheme(scheme) {
  return function buildUriWithProvidedScheme(domain, path) {
    return buildUri(scheme, domain, path)
  }
}

// We save the result of calling fixUriScheme('https') into a variable called buildHttpsUri, which behaves exactly the same as the version we built with Ramda.
const buildHttpsUri = fixUriScheme('https')
const twitterFavicon = buildHttpsUri('twitter.com', 'favicon.ico') // `https://twitter.com/favicon.ico`

// 🌲 Our function fixUriScheme accepts a value, and returns a function. Recall that this makes it a higher-order function, or HOF. This returned function only accepts two arguments: domain and path.
// 🍖 Note that, when we call this returned function, we only explicitly pass domain and path, but it remembers the scheme we passed on Line 1. This is because the inner function, buildUriWithProvidedScheme, has access to all of the values in its parent function’s scope, even after the parent function has returned. This is what we call closure.
// ⛳ This generalizes. Any time a function returns another function, the returned function has access to any variables initialized within the parent function’s scope. This is a good example of using closure to encapsulate state.
