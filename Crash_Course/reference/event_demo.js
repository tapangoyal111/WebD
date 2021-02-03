const Events = require("events")

class MyEmitter extends Events{


}

const myEmitter = new MyEmitter()

myEmitter.on("event",function(){
    console.log("Event FIredd")
})

// Init event 

myEmitter.emit("event")
