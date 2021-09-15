import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  let output = 0;
  let rows= matrix.length;
  let col = matrix[0].length;

 for(let i=0;i<rows;i++){
   for(let j=0;j<col;j++){
     if(i===0){
       output+=matrix[i][j];
       continue;
     }
     if(matrix[i-1][j]===0){continue;}
     output+=matrix[i][j]
     console.log(output);
   }
   console.log(output);
 }
 return output;
}
