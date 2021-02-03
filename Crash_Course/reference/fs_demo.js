const fs=require("fs")
const path=require("path")

// fs.mkdir(path.join(__dirname,"test"),{},function(err){
//     if (err) throw err;
//     console.log("Folder created..")
// })

fs.writeFile(path.join(__dirname,"test","hello.txt") , "Hello from tapan ",function(err){
    if (err) throw err;
    console.log("File created...")
})

fs.writeFile(path.join(__dirname,"test","hello.txt") , "Rewriting the file...",function(err){
    if (err) throw err;
    console.log("File created...")
})

fs.readFile(path.join(__dirname,"test","hello.txt"),"utf8",function(err,data){
    if (err) throw err;
    console.log(data)

})

// Rename a file

fs.rename(path.join(__dirname,"/test","hello.txt") , path.join(__dirname,"/test","helloworld.txt"),function(err){
    if (err) throw err;
    console.log("File renamed..")
} )