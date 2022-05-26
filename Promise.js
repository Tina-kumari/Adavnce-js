
let done =true;
const isItDoneYet=new Promise((resolve,reject)=>{
    if (done){
        const workDone="here is the thing  i built ";
        resolve (workDone)
    }else{
        const why="still working on something else";
        reject(why);
    }
})
const checkDone = () => {
    isItDoneYet
      .then(ok => {
        console.log(ok)
    })
    .catch(err => {
        console.error(err)
    })
}
checkDone()





var p1=new Promise((resolve,reject)=>{
    var dic={
        name: manvi,
        age:16,
        deame :hero
    }
    resolve(dic)
})
p1 .then(value =>{
    console.log(value)
})
.catch(err=>{
    console.log(err)
})


