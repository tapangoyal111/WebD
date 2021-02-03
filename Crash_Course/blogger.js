const Event  = require("events")
const uuid = require("uuid")


class BL extends Event{
    log(msg){
        // call the even
        this.emit("message",{id : uuid.v4(),msg : msg})
    }
}


const bl = new BL()
 
bl.on("message",function(data){
    console.log("Called Listener : ",data )
})

bl.log("hello")