function numberOf1Between1AndN(n) {
  let count = 0
  for (let i = 1; i <= n; i++) {
    let str = i.toString()
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 1) {
        count++
      }
    }
  }
  return count
}
