import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  n = n.toString().split("");
  console.log(n);
  let min = n[0]
  let minIndex=0;
  for(let i=1;i<n.length;i++){
    if(n[i]<min){min=n[i];minIndex = i};
  }
  n.splice(minIndex,1)/*.join('')/*.toNumber()*/;
  n=n.join('');
  console.log(n)
  return Number(n);
}
//SOLVED
