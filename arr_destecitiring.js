

// function runner(){
//     return ["tina","roshni","rtytr","okjnb"]
// }
// var [a,b,...other]=runner();
// console.log(a)
// console.log(b)
// console.log(other)


// const a={
//     ti:"tyui",
//     b:"lkjhgf",
//     full:function(){
//         return this.ti+""+this.b;
//     }
// }
// a.full();

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     // myCallback(sum);
//   }
  
//   myCalculator(myDisplayer);
  
export function getArticle (article_id) {
  return (dispatch) => {
    axios.get(`${url}article/${article_id}`)
    .then((res) => {
      let article = res.data
      dispatch({type: 'VIEW_ARTICLE', article})
    }).catch((err) => console.log(err))
  }
}

// origin: krissnawat/medium-clone-on-node
// src/redux/actions/actions.js/follow

//id, user_id
export function follow (id, user_id) {
  console.log(`${id} following ${user_id}`)
  return (dispatch) => {
    axios.post(`${url}user/follow`,{ id, user_id }).then((res) => {
      dispatch({type:'FOLLOW_USER', user_id})
    }).catch((err)=>console.log(err))        
  }
}
