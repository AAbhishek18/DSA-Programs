"use strict"
const prompt=require('prompt-sync')({sigint:true})

class Solution{
    pairInArraySum(arr,sum){
        let map=new Map();
        for(let i=0;i<arr.length;i++){
            if(map[arr[i]]){
                map[arr[i]]++;
            }
            else{
                map[arr[i]]=1;
            }
        }
        for(let i=0;i<arr.length;i++){
            if(map[sum-arr[i]]){
                return 1;
            }
        }
        return 0;
    }
}
let obj=new Solution();
let arr=[0, 0, 10, -12, 0, -1, -1, -1, -1, -1];
let sum=10;
console.log(obj.pairInArraySum(arr,sum));