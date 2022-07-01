"use strict"
const prompt =require('prompt-sync')({sigint:true})
 class Solution{
        nextPermutation(array){
            let start=array.length-2;
            while(start>=0){
                if(array[start]<array[start+1]){
                    break;
                }
                start--;
            }   
            if(start<0){
                array.sort((a,b)=>a-b);
                return array;
            }
 }
}