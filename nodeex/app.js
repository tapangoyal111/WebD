//  to run the program use node filename(app.js)
// or just alt+ctrl+n for Visual code studio

/*

var a="7"
var b="8"
console.log(a-b)
console.log("Hello world")

*/

var http=require("http")
http.createServer(function(req , res){
    res.writeHead(200,{"content-type":"text/html"})    // to send header
    res.write("Welcome to the World")                   // to write into the response
    res.end()                                           // to end the part
}).listen(8080)

