import EventEmitter from "node:events";

const emitter = new EventEmitter()

//event UserSignup

emitter.on("Usersignup", (UserName, UserEmail)=>{
 console.log(`User $(orderName) with Email: (UserEmail) Registered Successfully`)   
})
 //Add User to Database
emitter.on(
    "Usersignup", (UserName, UserEmail)=>{
    console.log(`Username added to the Database`)
    }

)