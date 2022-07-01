"use strict"
const prompt=require('prompt-sync')({sigint:true});


//let str=['apple','Apple']
//let str ='apple'
//let st=["yellow", "black", "White","red", "green"];

//console.log(str.charCodeAt(0));
//console.log(str.codePointAt(1))
console.log(st.sort((str1, str2) => str1.localeCompare(str2, undefined, { sensitivity: 'accent' })))
//=============================================================================================================
// let str=prompt('Enter a string: ');
// let str1=prompt('Enter a string: ')//.toLocaleLowerCase();
// console.log(str.toLocaleLowerCase()==str1.toLocaleLowerCase());
//-----------------------------------------------------------------
let str1='aBHishek';
let str2='AbhiShek';
console.log(str1.localeCompare(str2,undefined,{sensitivity:'accent'}));