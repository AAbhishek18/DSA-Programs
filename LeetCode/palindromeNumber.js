"use strict"
//const prompt=require('prompt-sync')({sigint:true})

class Solution{

    palindromeNumber(num){  
       console.log(typeof num)
        let numStr=num.toString();
        console.log(typeof numStr)
        let len=numStr.length;
        let mid=Math.floor(len/2);
        let left=0;
        let right=len-1;
        while(left<mid){
            if(numStr[left]!=numStr[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;

    }
}
let solution =new Solution();
let num=["ab","aba","abcd","abcde","abcdef"];
console.log(solution.palindromeNumber(num));





/*
class Solution{
  palindromeNumber(x){


    if(x<0) return false;
    
    
    let r_number=0;
    let remainder=0;
   let original_number=x
    while(x!=0){
      remainder=x%10;
     r_number=r_number*10+remainder
     x=Math.floor(x/10)   
    }
    console.log(r_number)
    console.log(original_number)
    if(r_number==original_number)
        return true
    else 
       return false;
    
        }
    }
    let solution =new Solution()
    let x=121;
    console.log(solution.palindromeNumber(x))
    
   */