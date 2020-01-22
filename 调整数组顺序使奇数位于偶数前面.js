function reOrderArray(array) {
  let res = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      res.push(array[i])
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      res.push(array[i])
    }
  }

  return res
}
