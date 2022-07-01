"use strict"
//Reverse an ARRAY WITHOUT USING 2ND ARRAY
//class Solution{
function reverseArray(arr) {
  swap(arr)
  return arr
}
function swap() {
  let Left = 0;
  let Right = arr.length - 1;

  while (Left < Right) {
    [arr[Left],arr[Right]] = [arr[Right],arr[Left]];
    // arr[Right] = arr[Left] - arr[Right]
    // arr[Left] = arr[Left] - arr[Right]

    Left++;
    Right--;
  }
  return arr;

}

//}
//let obj=new Solution()
let arr = [12, 4, 67, 2, 34]
console.log(reverseArray(arr))
//APPROACH 1===========================================================
/* class Solution{
    reverseArray(arr){
        let Left=0;
        let Right=arr.length-1;
      while(Left<Right){
        arr[Left]=arr[Left]+arr[Right]
        arr[Right]=arr[Left]-arr[Right]
        arr[Left]=arr[Left]-arr[Right]

        Left++;
        Right--;
      }
      return arr
  }
  
}
let obj=new Solution()
let arr=[12,4,67,2,34]
console.log(obj.reverseArray(arr))*/