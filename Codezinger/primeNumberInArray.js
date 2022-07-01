"use strict"
class Solution{
  primeNumberInArray(nums){
    let primeNumbers = [];
    for(let i = 0; i < nums.length; i++){
       if(this.isPrime(nums[i]))
        primeNumbers.push(nums[i]);
       
        }
    return primeNumbers;
  }
    isPrime(Number){
        if(Number < 2){
            return false;
        }
        for(let i = 2; i < Number; i++){
            if(Number % i === 0){
                return false;
            }
        }
        return true;
    }
}
let obj = new Solution();
let nums = [1,2,3,4,5,6,7,8,9,10]
console.log(obj.primeNumberInArray(nums));