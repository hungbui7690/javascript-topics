/*
  Partial Application



*/

function buildHttpsUri(domain, path) {
  return `https://${domain}/${path}`
}

const twitterFavicon = buildHttpsUri('twitter.com', 'favicon.ico')
console.log(twitterFavicon)

// This will do what we we want, but has not yet solved our problem completely. We’re duplicating buildUri, but hard-coding https as its scheme argument.
// Partial application lets us do this, but by taking advantage of the code we already have in buildUri . First, we’ll see how to do this using a functional utility library called Ramda. Then, we’ll try doing it by hand.
