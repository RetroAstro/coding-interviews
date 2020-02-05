function permutation(str) {
  if (str.length == 1) {
    return [str]
  }

  let arr = str.split('')
  let res = []
  let map = {}

  f([], arr)
  return res

  function f(fixed, rest) {
    if (rest.length == 1) {
      return [...fixed, ...rest]
    }
    return rest.map((item, index1) => {
      let temp = [...fixed, item]
      let mids = f(temp, rest.filter((item, index2) => index1 != index2))

      if (mids.length == arr.length) {
        let key = mids.join('')
        if (!map[key]) {
          res.push(key)
        }
        map[key] = true
      }
    })
  }
}
