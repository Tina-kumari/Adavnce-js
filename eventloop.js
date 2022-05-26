
function foo(b) {
    let a = 10
    return a + b + 11
}
  
function bar(x) {
    let y = 3
    return foo(x * y)
}
const baz = bar(7)








function levelone(){
    console.log("inside levelone");
}
function leveltwo(){
    console.log("inside level two");
    levelone();   
}
function main(){
    console.log("inside main");
    leveltwo();   
}
main();