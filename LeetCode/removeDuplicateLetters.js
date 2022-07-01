"use strict"
const prompt =require('prompt-sync')({sigint:true});
/*
Given a string s, remove duplicate letters so that every letter appears once and only once.
You must make sure your result is the smallest in lexicographical order among all possible results.
*/
class Solution{
    removeDuplicateLetters(s){
        let hash={};
        for(let i=0;i<s.length;i++){
            if(hash[s[i]]){
                hash[s[i]]++;
            }
            else{
                hash[s[i]]=1;
            }
        }
        console.log(hash);
        let stack=[];
        for(let i in hash){
            
            if(hash[i]){
        console.log(hash[i]);

                stack.push(i);
            }
        }
        console.log(stack);
       return stack.sort();
        let result='';
        for(let i=0;i<stack.length;i++){
            result+=stack[i];
        }
        return result;
    }
}
let sol=new Solution();
let s='bcabc';
console.log(sol.removeDuplicateLetters(s));