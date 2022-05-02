const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (typeof date.getMonth !== 'function' && date !== 'winter' && date !== 'spring' && date !== 'summer' && date !== 'autumn') {
   throw new Error("Invalid date!");
  } else {
 let seasons = ['winter', 'spring', 'summer', 'autumn'];
 if (date == seasons[0]) {
   return seasons[0]
 } else if (date == seasons[1]) {
   return seasons[1]
 } else if (date == seasons[2]) {
   return seasons[2]
 } else if (date == seasons[3]) {
   return seasons[3]
 }
if (date.getUTCMonth() == 11 || date.getUTCMonth() == 0 || date.getUTCMonth() == 1) {
 return seasons[0];
} else if(date.getUTCMonth() == 2 || date.getUTCMonth() == 3 || date.getUTCMonth() == 4) {
 return seasons[1];
} else if (date.getUTCMonth() == 5 || date.getUTCMonth() == 6 || date.getUTCMonth() == 7) {
 return seasons[2];
} else if ( date.getUTCMonth() == 8 || date.getUTCMonth() == 9 || date.getUTCMonth() == 10) {
 return seasons[3];
}
  }
}

module.exports = {
  getSeason
};
