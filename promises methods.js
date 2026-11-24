const promise1 = new Promise((resolve, reject) => {

    let success = false;

    if (success) {

        const user = {
            id: 1,
            username: "Nishtha",
            location: "New Delhi"
        };

        resolve(user);

    } else {

        reject(new Error("User not Fetched"));

    }
});

// const promise2 = new Promise((resolve, reject) => {
// let success = false;
  //  if (success) {
    //    const user = {
      //      id: 2,
        //    name: "Nishtha",
   //          age:19
  //      }
  //      resolve(user);
  //  }
 //   else {
 //       reject("Operation is failed");
 //   }
// });
//console.log(promise2);

//Promises.race = ([promise1, promise2]);
 //   .then((response)=> {
      console.log(response);
  //  })
   // .catch((error)=> {
  //     console.log(error.name) 
  //  })

   Promises.any = ([promise1, promise2]);
    .then((response)=> {
      console.log(response);
   })
    .catch((error)=> {
       console.log(error.name) 
     })

     .catch(error)=>{
        console.log(error.name)
     }