"use strict"
class Solution{
    primeNumberByRecursion(n){
        if(n<=2)
            return 0;
        
        if(n % 2 === 0)
            return 0;
        return this. primeNumberByRecursion(n-1);
    }



        // if(n<=2) return 0;
        // if(n%2==1)return 1
        // return this.primeNumberByRecursion(n-2)+this.primeNumberByRecursion(n-1);

    
}
let obj = new Solution();
let n = 7;
console.log(obj.primeNumberByRecursion(n));