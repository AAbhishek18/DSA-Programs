"use strict"
const prompt=require('prompt-sync')({sigint:true})
 class Solution{
    slidingWindow(array,k){
        
 }
}

/* 

 * Here we have to find the longest consecutive substring
 
//     word  ke repeatation handle nhi hua h
//!   ########     not  perfactly working  some fixing needed    ################# 
let str = "hellothere"
// let str = "longesstSubtring"  // iske glt  ho rha h  jo  ss h uske vajah se
let stIdxOfSub = 0
let edInxOfSub = 0

let ws = 0, we = 0

let windowMap = {}

while (we <= str.length - 1) {
    if (!windowMap[str[we]]) {
        windowMap[str[we]] = 1

        if (we - ws > edInxOfSub - stIdxOfSub) {
            edInxOfSub = we
            
        }
        we++
    } else {
        while (str[ws] != str[we]) {
            delete windowMap[str[ws]]
            ws++
            stIdxOfSub = ws
        }
        we++
    }
}

let res = ""
for (let i = stIdxOfSub; i <= edInxOfSub; i++) {
    res += str[i]
}

console.log(windowMap, stIdxOfSub, edInxOfSub, res)
*/