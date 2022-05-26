
const youtuber={
    name:"sanjna",
    constent:"programing",
    feature:function(){
        console.log(`my fav youtuber is ${this.name}.she is doing ${this.constent} on JavaScript`)
    }
}
// youtuber.feature();
// let youtuberfun=youtuber.feature;
// youtuberfun()
let youtuberfun2=youtuber.feature.bind(youtuber);
youtuberfun2();