

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) { 
    const Array = [];
    for(let i = 0; i < arr.length; i++) {
       Array.push(
       fn(arr[i])
    );
  }  return Array;
}const Array = mapForEach(strArray, function(item) {
  return item.length;
})
console.log(Array);