"use strict"
const prompt=require('prompt-sync')({sigint:true})


//class Solution{
    function sumArrayRecursion(arr,n){
       
        if(n===0){
            return 0;
        }
        else{
            return arr[n-1] + sumArrayRecursion(arr,n-1);
        }

    }
console.log(sumArrayRecursion([-2147483648, 2147483647],2));
/* 
        if (arr.length == 0){
            return 0;
        } else{
           return arr.shift() + sumArrayRecursion(arr);
        }
        */
//}
// let obj=new Solution();
// let arr=[1,2,3,4,5];
// let n=arr.length;
// console.log(n)
// console.log(obj.sumArrayRecursion(arr,n));