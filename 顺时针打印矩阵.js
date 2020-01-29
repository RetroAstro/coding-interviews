function printMatrix(matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return null
  }
  
  let up = 0
  let down = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let res = []

  while (true) {
    for (let col = left; col <= right; col++) {
      res.push(matrix[up][col])
    }
    up++
    if (up > down) break

    for (let row = up; row <= down; row++) {
      res.push(matrix[row][right])
    }
    right--
    if (left > right) break

    for (let col = right; col >= left; col--) {
      res.push(matrix[down][col])
    }
    down--
    if (up > down) break

    for (let row = down; row >= up; row--) {
      res.push(matrix[row][left])
    }
    left++
    if (left > right) break
  }

  return res
}
