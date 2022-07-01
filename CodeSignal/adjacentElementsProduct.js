"use strict"

class Solution{
    adjacentElementsProduct(inputArray){
        let max=inputArray[0]*inputArray[1];
        for(let i=1;i<inputArray.length-1;i++){
            let temp=inputArray[i]*inputArray[i+1];
            if(temp>max){
                max=temp;
            }
        }
        return max;
    }
}
let obj=new Solution();
let inputArray=[3,6,-2,-5,7,3];
console.log(obj.adjacentElementsProduct(inputArray));