import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  if(!(arr.indexOf(-1) != -1)){
    console.log(arr);
    console.log(arr.sort((a,b)=>{return a-b}))
    return arr.sort((a,b)=>{return a-b});
  };
  let sorted = [];
  arr.forEach(function(element){
    if(element!=-1){
      sorted.push(element);
      console.log(element);
    }
  });
  sorted = sorted.sort((a,b)=>{return a-b});
  console.log(sorted)
  for(let i = 0, j=0;i<arr.length;i++){
    if(arr[i]!==-1){
      arr[i]=sorted[j];
      j++;
    }
  }
  console.log(sorted);
  console.log(arr);
  return arr;
}
