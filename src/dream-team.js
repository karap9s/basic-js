const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let arr = [];
      str = '';
  if (members == null || typeof members == 'number' || typeof members == 'boolean' || typeof members == 'undefiend' || (typeof members == 'object' && !Array.isArray(members))) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
  if (typeof members[i] == 'string'){
    if (members[i][0] == ' ') {
      for (let j = 0; j < members[i].length; j++) {
        if (members[i][j] != ' ') {
          arr.push(members[i].slice(j, members[i].length - 1).toUpperCase())
          break;
        }
      }
    } else {
      arr.push(members[i].toUpperCase())
    }
  } else {
    continue;
  }
  }
  arr.sort()
  for (let j = 0; j < arr.length; j++) {
    if (typeof arr[j] == 'string') {
    str += arr[j][0];
    }
  }
  return str;
}

module.exports = {
  createDreamTeam
};
