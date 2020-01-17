/**
 * @param {string} str
 */
function replaceSpace(str) {
  return str
    .split('')
    .map(item => item == ' ' ? '%20' : item)
    .join('')
}
