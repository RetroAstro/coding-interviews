function firstNotRepeatingChar(str) {
  let map = {}

  for (let i = 0; i < str.length; i++) {
    let key = str[i]

    if (map[key]) {
      map[key].count++
    } else {
      map[key] = { index: i, count: 1 }
    }
  }

  for (let k in map) {
    if (map[k].count == 1) {
      return map[k].index
    }
  }

  return -1
}
