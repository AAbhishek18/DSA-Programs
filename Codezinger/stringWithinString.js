"use strict"
const prompt =require('prompt-sync')({sigint:true});

class Solution{
    stringWithinString(){
        const s1=prompt('Enteer first string: ').split(' ');
        const s2=prompt('Enter second string: ').split(' ');

console.log(s1[0])
console.log(s2[6])
        
}
}
let sol=new Solution();
sol.stringWithinString();
