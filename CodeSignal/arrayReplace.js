"use strict"
const prompt= require('prompt-sync')({sigint:true});

class Solution{
    
 arrayReplace(inputArray, elemToReplace, substitutionElem){
        let result=[];
        for(let i=0;i<inputArray.length;i++){
            if(inputArray[i]===elemToReplace){
                result.push(substitutionElem);
            }
            else{
                result.push(inputArray[i]);
            }
        }
        return result;
    }


}
let obj=new Solution();
let inputArray=[1,2,1];
let elemToReplace=1;
let substitutionElem=3;
console.log(obj.arrayReplace(inputArray,elemToReplace,substitutionElem));