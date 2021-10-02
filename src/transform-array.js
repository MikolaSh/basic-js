import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arra) {
  console.log("AAA")
  let arr=arra;
  console.log(arr)
  if (!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  for(let i=0;i<arr.length;i++){
    if(Number.isInteger(arr[i])){continue;}

    if(i==0){arr.splice(i,1)}
    if(i==arr.length-1){arr.splice(i,1)}
    if(arr[i]==='--double-next'){arr[i]=arr[i+1];}
    if(arr[i]==='--double-prev'){arr[i]=arr[i-1];}
    if(arr[i]==='--discard-prev'){arr.splice(i-1,2);}
    if(arr[i]==='--discard-next'){arr.splice(i,2);}
    /*switch(arr[i]){
      case '--double-next':
        arr[i]=arr[i+1];
        break;
      case '--double-prev':
        console.log("WORK!");
        arr[i]=arr[i-1];
        break;
      case '--discard-prev':
        arr.splice(i-1,2);
        break;
      case '--discard-next':
        arr.splice(i,2);
        break;
    }*/
  }
  return arr;
}
