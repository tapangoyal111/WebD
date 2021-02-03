/*
console.log("Hello from tapan goyal...")
const File=require("./person")
const person=File.person
const Student=File.student
console.log(person)
const st = new Student("Tapan ", 20)
st.print()
*/

const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer(function(req,res){
    // if (req.url=="/"){
    //     fs.readFile(path.join(__dirname,"public","about.html"),function(err,data){
    //         res.writeHead(200,{"Content-Type":"text/html"})
    //         res.end(data)
    //     })
        
    // }

    // if (req.url=="/api/users"){
    //     const user=[
    //         {"name":"Tapan GOyal","age":20},
    //         {"name":"Naman GOyal","age":28}
    //     ]
    //     res.writeHead(200,{"Content-Type":"application/json"})
    //     res.end((JSON.stringify(user)))
    // }


    // build file path dynamic...
    let filepath=path.join(__dirname,"public",req.url=="/"?"index.html":"about.html")
    console.log(filepath)
    res.end()


})

const PORT=process.env.PORT || 5000

server.listen(PORT,function(){
    console.log("Server is running...")
})