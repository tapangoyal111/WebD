const url = require("url")

const myurl = new URL("http://abc.com:8000/hello.html?id=100")

// get serialize url 
console.log(myurl.href)

console.log(myurl.toString())

console.log(myurl.host)
// not get port no.
console.log(myurl.hostname)

// pathname 
console.log(myurl.pathname)

// query 
console.log(myurl.search)
console.log(myurl.searchParams)

