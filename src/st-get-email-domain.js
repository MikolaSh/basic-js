import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain( email ) {
  let output ='';
  for(let i=email.length-1;email[i]!='@';i--){
    output = email[i] + output;
  }
  return output;
  /*return email.split("").splice(email.indexOf('@')+1).join("");*/
}
