"use strict"
class Solution{
    swapNodesInPairs(head){
        if(head === null || head.next === null)
            return head;
        let temp = head.next;
        head.next = this.swapNodesInPairs(head.next.next);
        temp.next = head;
        return temp;
    }
}
let obj = new Solution();
let head = {data: 1,next: {data: 2,next: {data: 3,next: {data: 4, next: {data: 5,next: null}}}}}
console.log(obj.swapNodesInPairs(head));
