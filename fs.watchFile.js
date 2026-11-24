const fs= require('fs')

fs.watch("info.txt", (curr,prev)=>{
    console.log("curr: ", curr);
    console.log("prev: ",prev);
})