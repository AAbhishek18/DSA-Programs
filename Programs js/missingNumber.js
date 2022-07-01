"use strict"
const prompt=require('prompt-sync')({signint:true})

/*Missing number in array:

This problem is part of GFG SDE Sheet. Click here to view more.   
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N.
Find the missing element.

Example 1:

Input:
N = 5
A[] = {1,2,3,5}
Output: 4
*/ 

class Solution{
    MissingNumber(array,n){
       let allSum=(n*(n+1))/2;
        let arraySum=0;
        for(let i=0;i<array.length;i++){
         arraySum+=array[i];
       }
       return Math.abs(allSum-arraySum);
    }

}
let sol=new Solution();
let array=[1,2,3,4,5,6,7,8,10];
let n=10;
console.log(sol.MissingNumber(array,n));