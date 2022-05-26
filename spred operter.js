// /rest operator 
var myName = ["Marina" , "Magdy" , "Shafiq"] ;
const [firstName , ...familyName] = myName ;
console.log(firstName); 
console.log(familyName); 



let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let arr3=[...arr1,11,12,...arr2,13,14];
console.log(arr3,15,16);



// replace copy method:
let arr=[1,2,3,4];
let arr1=[5,6];
arr=[...arr,...arr1];
console.log(arr);


// replace expand:
let a=[1,2,3,4];
let b=[5,6,7];
c=[...a,7,8,...b,9,0]
console.log(c);

 

// spread Operator in object:
const user1 = {
    name: 'Jen',
    age: 22
};
  
const clonedUser = { ...user1 };
console.log(clonedUser);

