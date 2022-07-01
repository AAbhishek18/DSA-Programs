"use strict"
const prompt=require('prompt-sync')({sigint:true})

class Solution{
    monveZeroes(array){
       let left=0;
       let right=0;

       let count=0;
for(let i=0;i<array.length;i++){
  if(array[i]==0){
    count++
  }
}


       while(right<array.length){
              if(array[right]!=0){
                array[left]=array[right];
                
                left++;
                right++;
               
              }
              else{
                
                right++;
              }
       }
       return array

    } 
 }


let solution=new Solution();
let array=[0,1,0,3,12];
console.log(solution.monveZeroes(array));


/* let count=0;
       
        for(let i=0;i<array.length;i++){
          if(array[i]==0){
            count++;
          }
        }
        console.log(count)
        let i=0
        while(i<array.length){
            if(array[i]==0){
                array.shift();
            }
            console.log(array)
        }
            if(count>0){
           array.push(0);
         
           count--;
           i++
        }
        return array;
      */


