"use string"
class Solution{
    stepsToRotateString(str){
        console.log(str.length/2)
        let count=0;
        let strArr=str.split("");
        for(let i=0;i<strArr.length;i++){
            if(strArr[i]!=targetArr[i]){
                count++;
            }
        }
        
        return count;
    }
}
let obj=new Solution()
let str="abcabc"

console.log(obj.stepsToRotateString(str))