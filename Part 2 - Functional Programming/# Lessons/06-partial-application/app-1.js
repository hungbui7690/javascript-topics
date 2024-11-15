/*
  Partial Application



*/

function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`
}

const twitterFavicon = buildUri('https', 'twitter.com', 'favicon.ico')
const googleHome = buildUri('https', 'google.com', '')

console.log(twitterFavicon, googleHome)

// both use "https" -> we prefer to write:
// -> const twitterFavicon =  buildHttpsUri('twitter.com', 'favicon.ico')
