function getUser() {
return new Promise((resolve, reject)=>{
    let user = true;
    if(!user){
        reject(new Error("User not exists"))
    }else
        resolve({
            username: "Nishtha",
            role: "student",
        });
}
)};

const response = await getUser()
assync function fetchUser(){
console.log(response);
}
console.log("Hello");
