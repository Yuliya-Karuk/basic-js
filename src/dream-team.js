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
  if (Array.isArray(members)) {
    let preparedMembers = members.filter((el) => typeof el === 'string').map(el => el.trim().toUpperCase());
    let team = preparedMembers.sort().reduce(((acc, el) => acc + el[0]), '')
    return team;
  }
  return false;
}

module.exports = {
  createDreamTeam
};
