const http = require("http")

// create server object

http.createServer(function(req,res){
    res.write("Hello")
    res.end()
}).listen(8080,function(){
    console.log("Server Running")
})
