"use strict"

class Solution{
    uniqueElementUsingMap(arr){
      let map =new Map()
      let unique=0;
      for(let i of arr){
        if(!map.get(i)){
            
            unique++;
            map.set(i,1)

        }

      }
      return unique;
    }
}
let obj=new Solution();
let arr=[1,2,3,1,4,2,5,6,3,8]
console.log(obj.uniqueElementUsingMap(arr));