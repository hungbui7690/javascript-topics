/*
  Ramda
  - We called Ramda’s partial function, and passed two arguments: First, a function, called buildUri, and second, an array containing one "https" value.
  - Ramda then returns a new function, which behaves like buildUri, but with "https" as its first argument.



*/

function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`
}

// ramda -> R.partial returns a new function (!)
const buildHttpsUri = R.partial(buildUri, ['https'])
const twitterFavicon = buildHttpsUri('twitter.com', 'favicon.ico')
console.log(twitterFavicon) // https://twitter.com/favicon.ico

const twitterPath = R.partial(buildUri, ['https', 'twitter.com'])
const twitterFaviconX = twitterPath('favicon.ico')
console.log(twitterFaviconX) // https://twitter.com/favicon.ico
