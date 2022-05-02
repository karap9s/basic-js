const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let count = 0;
  let arr = [];
  let newArr = [];
  let finalStr = '';
  for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
          if(str[i] !== str[j]){
              break;
              }
          if (str[i] != str[j + 1]) {
              ++count;
              continue;
          }
          if (str[i] == str[j]) {
              count++;
          }
      }
      if (str[i] == str[i - 1]) {
          count = 0;
          continue;
      } 
      else {
      arr.push(count, str[i]);
          count = 0;
      }
  }
  for (let a = 0; a < arr.length - 1; a++) {
      if (a % 2 !== 0) {
          continue;
      }
      if (a == arr.length) {
          break;
      } 
      else {
      newArr.push([arr[a], arr[a + 1]])
  }
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] == 1) {
        continue
      } else {
      finalStr += newArr[i][j];
      }
    }
  }
  return finalStr;
}

module.exports = {
  encodeLine
};
