/**
 *
 * @param {number} target
 * @param {number[][]} array
 */
function find(target, array) {
  if (array.length == 0 || array[0].length == 0) {
    return false
  }

  let row = 0
  let col = array[0].length - 1

  while (row < array.length && col >= 0) {
    if (array[row][col] == target) {
      return true
    } else if (array[row][col] < target) {
      row++
    } else {
      col--
    }
  }

  return false
}

