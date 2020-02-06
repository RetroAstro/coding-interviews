function moreThanHalfNum(numbers) {
  let res = 0
  let mid = numbers.length >> 1
  let map = {}

  numbers.forEach(item => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1
    }
  })

  Object.entries(map).forEach(([key, value]) => {
    if (value > mid) {
      res = key
    }
  })

  return res
}
