"use strict"
class Solution {
    twoSumUsingTowPointer(nums, target) {   
        nums.sort((a,b)=>a-b)
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum === target) {
                return [left, right];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

    }
}
let obj = new Solution();
let nums = [-1,-2,-3,-4,-5]
let target = -8;
console.log(obj.twoSumUsingTowPointer(nums, target));


//approach-2===========================================================
/*  twoSum(nums, target){
        
            let map = {};
            for(let i = 0; i < nums.length; i++){
                let diff = target - nums[i];
                if(map[diff] !== undefined){
                    return [map[diff], i];
                }
                map[nums[i]] = i;
         }
  
    }
}
let obj = new Solution();
let nums = [3,2,4]
let target = 6;
console.log(obj.twoSum(nums, target));
*/