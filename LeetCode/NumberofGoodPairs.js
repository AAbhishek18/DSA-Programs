"use strict"
const prompt=require('prompt-sync')({sigint:true})

class Solution{
    NumberofGoodPairs(array){
        let hash={};
        for(let i=0;i<array.length;i++){
            if(hash[array[i]]){
                hash[array[i]]++;
            }
            else{
                hash[array[i]]=1;
            }
        }
        let count=0;
        console.log(hash);
        for(let i in hash){
            if(hash[i]>1){
                count+=hash[i]*(hash[i]-1)/2;
            }
        }
        return count;
    }}
let solution=new Solution();    
let array=[1,1,1,1];
console.log(solution.NumberofGoodPairs(array));
