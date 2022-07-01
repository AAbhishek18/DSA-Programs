"use strict"

const prompt = require("prompt-sync")({sigint:true})

/*Distance between two closest minimum:

Given an array of integers, find the minimum distance between any two occurrences of the minimum integer in the array.
 

Input:
 8
 5 1 2 3 4 1 2 1
where:
First line represents the number of elements in the array.
Second line represents the elements of the array.
 Output:2
Explanation: The minimum element 1 occurs at indexes: 1, 5 and 7. So the minimum distance is 7-5 = 2.
*/
 /*class Solution{
        findMinDisBetweenTwoClosest(a,n){
             let min=a[0];
            let minIndex=0;
            for(let i=1;i<n;i++){
                if(a[i]<min){
                    min=a[i];
                    minIndex=i;
                }
            }
            let minDis=n;
            for(let i=0;i<n;i++){
                if(a[i]==min){
                    minDis=Math.min(minDis,i-minIndex);
                }
            }
            console.log(minDis);
        }
 }
 let obj=new Solution();
 let n=prompt('Enter the number of elements :');
 let a=[];
 for(let i=0;i<n;i++){
    a[i]=prompt();
 }
    obj.findMinDisBetweenTwoClosest(a,n);
    */
   class Solution{
         findMinDisBetweenTwoClosest(a,n){
                let min=a[0];
                let minIndex=0;
                for(let i=1;i<n;i++){
                    if(a[i]<min){
                        min=a[i];
                        minIndex=i;
                    }
                }
                let minDis=n;
                for(let i=0;i<n;i++){
                    if(a[i]==min){
                        minDis=Math.min(minDis,i-minIndex);
                    }
                }
                console.log(minDis);
     
        }
   }
    let obj=new Solution();
    let n=prompt('Enter the number of elements :');
    let a=[];
    for(let i=0;i<n;i++){
         a[i]=prompt();
     }
    obj.findMinDisBetweenTwoClosest(a,n);