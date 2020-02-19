function printMinNumber(numbers) {
  if (numbers.length == 0) {
    return ''
  }
  return numbers
    .sort((a, b) => a - b)
    .map(num => num + '')
    .reduce((prev, next) => {
      let str1 = prev + next
      let str2 = next + prev

      for (let i = 0; i < str1.length; i++) {
        if (str1[i] == str2[i]) {
          continue
        } else if (str1[i] < str2[i]) {
          return str1
        } else {
          return str2
        }
      }
      
      return str1
    })
}
