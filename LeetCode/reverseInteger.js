"use strict"
class Solution{
    reverseInteger(num){
        var rev=0;
        let sign=num<0?-1:1;
        if(num<=Math.pow(-2^31) || num>=Math.pow(2^31-1)) return 0
        while(num!=0){
            let rem=num%10;
             rev=rev*10+rem;
            num=Math.floor(num/10);
        }
        return rev*sign;
    }
}
let obj=new Solution()
let num=-123
console.log(obj.reverseInteger(num))