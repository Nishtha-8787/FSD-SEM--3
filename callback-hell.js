function getUser(id,callbacks){
    setTimeout(()=>
    {
        console.log("User Fetched");
            const user = {
                id: 1;
                username: "Nishtha"
            }
            callbacks(null,user)

        },1000);
    }

    function getProfile(userId,callback){
        setTimeout(()=>
    {
        console.log("profile Fetched");
            const user = {
                id: 1;
                username: "Nishtha"
                location:"New Delhi"
                Interest:{"web dev", "Agentic AI"}
            }
            callbacks(null,profile)

        },1000);
    }
    
    function getPost(username,callback){
    setTimeout(()=>
    {
        console.log("Posts Fetched");
            const posts = {"post1", "post2", "post3"}
            callback (null,posts)

    },1000);
}

getUser(10101,(error,user)=>{
    if(error){
        console.log(error);
        return;
    }
     getProfile(user.id, (error, profile) => {
        if (error) {
            console.log(error);
            return;
        }

        getPosts(profile.username, (error, posts) => {
            if (error) {
                console.log(error);
                return;
            }

            console.log("Posts:", posts);
        });
    });
});


//promises
//pending
//resolve
//reject