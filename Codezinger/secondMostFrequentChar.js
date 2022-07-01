"use strict"
class Solution{
    secondMostFrequentChar(str){
        let MAX = 0, secondMAX = 0;
        let result = '';
        let map = {};
        for(let i = 0; i < str.length; i++){
            if(map[str[i]]>MAX){
                MAX=map[str[i]] ;
            }
            else{
                ++map[str[i]];
            }
        }
       
        for(let key in map){
            if(map[key] > MAX && map[key] > secondMAX){
                secondMAX = MAX;
                MAX = map[key];
                result = key;
            }
            else if(map[key] > secondMAX){
                secondMAX = map[key];
            }
        }
        return result;
    }
}
let obj = new Solution();
let str = 'aaaaabbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzzzzzxxxxxxxxxxxxx';
console.log(obj.secondMostFrequentChar(str));
