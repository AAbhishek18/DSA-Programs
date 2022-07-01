{"use strict"}
const prompt=require('prompt-sync')({sigint:true})
class Solution{
    swapping(a,b){
        a=a+b;
        b=a-b;
        a=a-b;
        return [a,b].join(" ");
    }
  
}
let obj=new Solution();
let a=parseInt(prompt('Enter a: '));
let b=parseInt(prompt('Enter b: ')) ;
console.log(obj.swapping(a,b));

/*  */