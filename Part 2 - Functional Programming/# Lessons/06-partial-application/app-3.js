/*
  Ramda


*/

function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`
}

// ramda -> R.partial returns a new function (!)
const buildHttpsUri = R.partial(buildUri, ['https'])

const twitterFavicon = buildHttpsUri('twitter.com', 'favicon.ico')
console.log(twitterFavicon) // https://twitter.com/favicon.ico
