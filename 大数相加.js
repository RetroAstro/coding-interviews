/**
 * @param {string} n
 * @param {string} m
 * @return {string} 
 */
function add(n, m) {
  let max = Math.max(n.length, m.length)

  n = n.padStart(max, 0)
  m = m.padStart(max, 0)

  let temp = 0
  let carry = 0
  let sum = ''

  for (let i = max - 1; i >= 0; i--) {
    temp = Number(n[i]) + Number(m[i]) + carry
    carry = Math.floor(temp / 10)
    sum = temp % 10 + sum
  }

  if (carry == 1) {
    sum = '1' + sum
  }

  return sum
}
