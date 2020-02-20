function duplicate(numbers, duplication) {
  let flag = false
  let map = {}

  for (let i = 0; i < numbers.length; i++) {
    let key = numbers[i]
    if (map[key]) {
      duplication[0] = key
      flag = true
      break
    } else {
      map[key] = true
    }
  }

  return flag
}
