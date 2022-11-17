let set1= new Set([1,3,4,5]);
console.log([].slice.apply(set1));

let arr1 = [1,2,3,4,5]

console.log(arr1.splice(1,0,"a","b"))
console.log(arr1)