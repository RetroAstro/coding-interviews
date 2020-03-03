function sum(n) {
  let map = { 1: n => n, 0: n => f(n) }
  let res = 0

  f(1)
  return res

  function f(num) {
    res += num
    map[Number(num == n)](num + 1)
  }
}
