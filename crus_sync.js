//Sync
//Assync
//Callback based method
//Promises based method


import fs from 'fs'

fs.writeFileSync("notes.txt", "Hello World")

//Create the file using fs module
fs.writeFileSync("notes.txt", "Hello")

//Read the file
const data = fs.readFilesync("notes.txt" , "utf8")
console.log("Data: ", data);

//Update the file
fs.appendFileSync("notes.txt" , "Hello World")

//delete the file
fs.rmFilesync("notes.txt")
