"use strict"
const prompt=require('prompt-sync')({sigint:true})

class Solution{
  longestPlalindromeSubstring(str){

    let maxLength=0;
    let start=0;
    let end=0;
    for(let i=0;i<str.length;i++){
        let length=0;
        for(let j=i;j<s.length;j++){
            if(str[i]===str[j]){
            length++;
            }
            else{
            break;
            }
        }
        console.log(str)
        console.log(length)
        
        if(length>maxLength){
            maxLength=length;
            start=i;
            end=i+length-1;
        }
        length=0;
  }
    return str.substring(start,end+1);

}
}
let obj=new Solution();
let s="babad";
console.log(obj.longestPlalindromeSubstring(s));