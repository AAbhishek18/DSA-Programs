"use strict"


class Solution {
evenDigitsOnly(n){
    let num=n.toString();

    if(num===0) return true;

    if(num%2!=0) return false;

    return evenDigitsOnly(Math.floor(num/10));
    }

}

let obj=new Solution();
let n=22462;
console.log(obj.evenDigitsOnly(n));








//Approach 2: Using a loop
/*
    Complete the function that takes a string of digits as input, and returns the number of digits that are even.
class Solution{
    evenDigitsOnly(n){
        let str = n.toString();
        if(str ==0) return true;
        for(let i = 0; i < str.length; i++){
            if(str[i] % 2 != 0) return false;
        }
        return true;
        

    }
}
let obj=new Solution();
let n=22424;
console.log(obj.evenDigitsOnly(n));
*/

//APPROACH-1===========================================================
/*class Solution{
    evenDigitsOnly(n){
        return n.toString().split("").every(x => x % 2 === 0);
    }
}
let obj = new Solution();
let n = 122345;
console.log(obj.evenDigitsOnly(n));
*/