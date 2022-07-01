"use strict"
//we have given an array as input containing 0's and 1's.
// we need to sort the array in such a way that all 0's are on left side and all 1's are on right side.
class Solution {
    sort01(arr) {
        let count0 = 0, count1 = 0;
        let curr = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                count0++;
            }

        }
        count1 = arr.length - count0;
        while (count0 > 0){
            arr[curr] = 0;
            curr++;
            count0--;
        
        }
        while(count1>0){
            arr[curr]=1;
            count1--
            curr++;
        }
        return arr;
    }


}


let obj = new Solution();
let arr = [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,];
console.log(obj.sort01(arr));