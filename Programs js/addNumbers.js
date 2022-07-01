"use strict"
const prompt=require('prompt-sync')({sigint:true})
const num1=prompt('Enter first number: ')
const num2=prompt('Enter second number: ')
let sum=parseInt(num1)+parseInt(num2)
console.log(`The sum of ${num1} and ${num2} is ${sum}`)