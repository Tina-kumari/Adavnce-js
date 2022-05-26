// function hoisting in Javascript
function add(a, b){
    return a + b;
}

let x = 20,
    y = 10;

let result = add(x,y);
console.log(result);

// variable hoisting in Javascript
var a;
console.log(a);
a=20;
var b;
console.log(b);
b=39;




// function hoisting in JavaScripts
console.log("I am a "+student);
var job="Web Developer";
console.log("I am a "+student);
whoAmI();
function whoAmI(){
    console.log("I am a "+student1);
    var job1="Web Developer";
    console.log("I am a "+student1);
}