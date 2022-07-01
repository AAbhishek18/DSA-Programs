"use strict"
const prompt=require('prompt-sync')({sigint:true})
/* 
Find duplicates in an array: 
Given an array a[] of size N which contains elements from 0 to N-1,
you need to find all the elements occurring more than once in the given array.

Example 1:

Input:
N = 4
a[] = {0,3,1,2}
Output: -1
Explanation: N=4 and all elements from 0
to (N-1 = 3) are present in the given
array. Therefore output is -1. 
*/
//APPROACH 1ST==============================================================================

class Solution{
    findDuplicates(a,n){
        let hash={};
        for(let i=0;i<n;i++){
            if(hash[a[i]]){
                hash[a[i]]++;
            }
            else{
                hash[a[i]]=1;
            }
        }
        for(let i in hash){
            if(hash[i]>1){
                console.log(i);
            }
        }
    }
       
}

let sol=new Solution();
let a=[0,3,1,2,3,2,1,0,3,1,2];
let n=10;
sol.findDuplicates(a,n)
//console.log(sol.findDuplicates(a,n));

//APPROACH 2ND==============================================================================
// class Solution{
//     findDuplicates(a,n){

//     }
// }


