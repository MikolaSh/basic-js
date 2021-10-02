import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits( n ) {
  console.log("Функция получила: "+n)
 let sum = 0;
 n = n.toString().split("");
 console.log(n);
 for(let i=0;i<n.length;i++){
   sum+=Number(n[i])
 }
 console.log(sum)
 if(sum<10){
  console.log(sum);
  return sum;
}else{
  sum = sum.toString().split("");
  let sum_1=0;
  for(let i=0;i<sum.length;i++){
    sum_1+=Number(sum[i])
  }
  return sum_1;
}


}

///SOLVED!
