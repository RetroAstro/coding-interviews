function findNumbersWithSum(array, sum) {
  let map = {}
  let res = { min: -1, arr: [] }

  for (let i = 0; i < array.length; i++) {
    let key = array[i]
    if (map[key]) {
      let muti = map[key] * key
      if (res.min == -1 || res.min > muti) {
        res.min = muti
        res.arr = [map[key], key]
      }
    } else {
      map[sum - key] = key
    }
  }

  return res.arr
}
