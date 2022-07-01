"use strict"
const prompt=require('prompt-sync')({sigint:true})

class Solution{
    majorityElement(nums){
    
        let count=0;
        let majorityElement=0;
        for(let i=0;i<nums.length;i++){
            if(count===0){
                majorityElement=nums[i];
            }
            if(nums[i]===majorityElement){
                count++;
            }
            else{
                count--;
            }
        }
        return majorityElement;
    }
}
let obj=new Solution();
let nums=[1,2,3,4,5];
//let n=arr.length;
console.log(obj.majorityElement(nums));