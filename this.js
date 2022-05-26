const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
};
  
console.log(test.func());




var myVar = 100;

function WhoIsThis() {
    this.myVar = 200;
}
var obj1 = new WhoIsThis();

var obj2 = new WhoIsThis();
obj2.myVar = 300;

alert(obj1.myVar); 
alert(obj2.myVar); 



var myVar = 100;
function SomeFunction() {
    function WhoIsThis() {
        var myVar = 200;
        alert("myVar = " + myVar);
        alert("this.myVar = " + this.myVar); 
    }
    WhoIsThis(); 
}
SomeFunction();



