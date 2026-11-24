import fs from 'fs'

fs.mkdir(" ./myfolder" , (err)=>[
    if(err){
        console.log(err);
        return
    }
    console.log("folder Created");
])