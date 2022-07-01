"use strict"

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr)
let arr2=arr.slice(0,5)
console.log(arr2)
let arr3=arr2.filter(e => String(e).trim());
console.log(arr3)