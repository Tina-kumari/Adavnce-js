stetimeout(()=>{
    console.log("i have  multiple arguments can be passed")
    setTimeout(()=>{
        console.log("Get A Server Running in Seconds")
        setTimeout(()=>{
            console.log(" method is a special method")
            setTimeout(()=>{
                console.log("initialization that must be done before")
            },1000)
        },2000)
    },3000)
},4000)