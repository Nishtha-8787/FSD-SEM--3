console.log("start");
for(i=0;i<1;i++){
    console.log(i)
}
console.log("end")

console.log("async start")
setTimeout(()=>{
    console.log("Hello Bhanu");
},2000)
console.log("end async")