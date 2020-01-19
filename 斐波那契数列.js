function fibonacci(n) {
  let map = {}

  function f(n) {
    if (n == 0) return 0
    if (n == 1) return 1

    if (map[n]) return map[n]

    let res = f(n - 1) + f(n - 2)
    map[n] = res
    return res
  }

  return f(n)
}

