function poke(arr) {
  let res = []
  while (arr.length > 1) {
    res.push(arr.pop())
    res.push(res.shift())
  }
  res.push(arr.pop())
  return res
}
