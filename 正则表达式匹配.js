function match(s, p) {
  return f(0, 0)
  
  function f(i, j) {
    if (!s[i] && !p[j]) {
      return true
    }
    if (p[j + 1] == '*') {
      if (s[i] == p[j] || (s[i] && p[j] == '.')) {
        return f(i + 1, j + 2) || f(i + 1, j) || f(i, j + 2)
      } else {
        return f(i, j + 2)
      }
    }
    if (s[i] == p[j] || (s[i] && p[j] == '.')) {
      return f(i + 1, j + 1)
    }
    return false
  }
}
