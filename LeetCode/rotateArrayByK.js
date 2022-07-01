"use strict"
const prompt = require('prompt-sync')({sigint:true});




   function rotateArrayByK(arr, k){
       swap(arr);
      
       
       let arr1=arr.slice(0,k)//=>[11,9]
       swap(arr1)//=>[9,11]
     
       let arr2=arr.slice(k)//=>[2,6,3,12]
        swap(arr2)//=>[12,3,6,2]
        console.log([1,2,3,4])
        let temp=[...arr1.concat(arr2)]
    return temp//arr1.concat(arr2)
    }
    //swapping the elements
    function swap(arr) {
        let Left = 0;
        let Right = arr.length - 1;
      
 while (Left < Right) {

    [arr[Left],arr[Right]]=[arr[Right],arr[Left]]              //   arr[Left] = arr[Left] + arr[Right]
                                                               //   arr[Right] = arr[Left] - arr[Right]
      Left++;                                                   //   arr[Left] = arr[Left] - arr[Right]
     Right--;                                                 
  }
    }
       
var arr = [12,3,6,2,9,11]
let k = 2;
console.log(rotateArrayByK(arr,k))