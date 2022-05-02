const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = '+',  addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let newStr = '';
  let finish = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    finish += `${addition}${i === additionRepeatTimes - 1 ? '' : additionSeparator}`
  }

  for (let i = 0; i < repeatTimes; i++) {
    newStr = newStr + `${str}${finish}${i === repeatTimes - 1 ? '' : separator}`
  }

  return newStr;
}

module.exports = {
  repeater
};
