"use strict"
const prompt=require('prompt-sync')({ssigint:true})

class Solution{
    searchInsertPosition(array,target){
        let start=0;
        let end=array.length-1;
        let mid;
        while(start<=end){
             mid=Math.round((start+end)/2);
            if(array[mid]==target){
                return mid;
            }
            else if(array[mid]<target){
                start=mid+1;
            }
            else{
                end=mid-1;
            }
        }
        console.log(start);
        return start;
    }
}
let solution =new Solution();
let array=[1,2,4,5];
let target=3;
console.log(solution.searchInsertPosition(array,target));