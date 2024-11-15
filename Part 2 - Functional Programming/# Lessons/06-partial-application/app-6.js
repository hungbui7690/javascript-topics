/*
  Manual Partial Application
  - In practice, you’ll use utilities like partial whenever you need to use partial application. But, for the sake of illustration, let’s try to do this ourselves.


*/

// We could do something similar using an object with methods:
class UriBuilder {
  constructor(scheme) {
    this.scheme = scheme
  }

  buildUri(domain, path) {
    return `${this.scheme}://${domain}/${path}`
  }
}

const httpsUriBuilder = new UriBuilder('https')

const twitterFavicon = httpsUriBuilder.buildUri('twitter.com', 'favicon.ico')
console.log(twitterFavicon)

// In this example, we configure each instance of the UriBuilder class with a specific scheme. Then, we can call the buildUri method, which combines the user’s desired domain and path with our pre-configured scheme to produce the desired URL.
