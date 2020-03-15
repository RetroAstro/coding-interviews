function cutRope(number) {
  if (number == 2) return 1
  if (number == 3) return 2

  let max = 0
  f(number)
  return max
  
  function f(n, total = 1) {
    if (n == 0 && max < total) {
      max = total
    }
    for (let i = 1; i <= n; i++) {
      f(n - i, total * i)
    }
  }
}
