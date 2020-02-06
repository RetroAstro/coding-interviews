function findNumsAppearOnce(array) {
  let map = {}

  array.forEach(item => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1
    }
  })

  let res = []

  Object.entries(map).forEach(([key, value]) => {
    if (value == 1) {
      res.push(key)
    }
  })

  return res
}
