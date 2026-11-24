import EventEmitter from "node:events";

const emitter = new EventEmitter()

//event Registration

emitter.on("orderPlaced", (orderName, orderPrice)=>{
 console.log(`Order $(orderName) and price: (orderPrice) Placed Successfully`)   
})

emitter.on("orderPlaced", ()=>{
    console.log("Notification send to the user");
})

emitter.on("orderPlaced", ()=>{
    console.log("Email send");
})

emitter.on("orderPlaced", ()=>{
    console.log("Inventory Updated");
})

emitter.emit("orderPlaced", "rare beauty blush" , 3200) 