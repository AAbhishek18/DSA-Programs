"use strict"
const prompt=require('prompt-sync')({sigint:true})

//sorting an array using single for loop
 class Solution{
     sortArrayUsingSigleForLoop(a,n){
    // let first_element=a[0];
    // let minIndex=0;
    // for(let i=1;i<n;i++){
    //     if(a[i]<first_element){
    //         first_element=a[i];
    //         minIndex=i;

    //     }

    // } 
 let first_element=a[0];
    let minIndex=0;
    for(let i=1;i<n;i++){
        if(a[i]<first_element){
            first_element=a[i];
            minIndex=i;
        }
        
    }
    let temp=a[0];
    a[0]=a[minIndex];
    a[minIndex]=temp;
    console.log(a);
    }
 }
    let sol=new Solution();
    let a=[5,1,2,3,4,1,2,1];
    let n=8;
    sol.sortArrayUsingSigleForLoop(a,n);