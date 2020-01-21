function numberOf1(n) {
  let count = 0
  while (n != 0) {
    count++
    n &= n - 1
  }
  return count
}

