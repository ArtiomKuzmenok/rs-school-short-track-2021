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
function deleteDigit(n) {
  const str = n.toString();
  let arr = str.split('');
  let max = 0;
  for (let j = 0; j < arr.length; j++) {
    arr.splice(j, 1);
    if (arr.join('') > max) {
      max = arr.join('');
    }
    arr = str.split('');
  }
  return Number(max);
}

module.exports = deleteDigit;
