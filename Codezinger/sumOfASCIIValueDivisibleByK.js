"use strict"
const prompt=require('prompt-sync')({sigint:true})

class Solution{
    sumOfASCIIValueDivisibleByK(str,k){
        let sum=0;
        for(let i=0;i<str.length;i++){
            sum+=str.charCodeAt(i);
        }
        return sum%k==0;
    }

        
}
let solution =new Solution();
let str='bcgabc';
let k=3;
console.log(solution.sumOfASCIIValueDivisibleByK(str,k));