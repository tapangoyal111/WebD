const os = require("os")

// platform 
console.log(os.platform())

//  cpu arc
console.log(os.arch())

// cpu core info

console.log(os.cpus())

// freemem and total memory

console.log(os.freemem(),os.totalmem())