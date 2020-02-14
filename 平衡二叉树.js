function isBalancedTree(root) {
  return f(root) != -1
  
  function f(node) {
    if (node == null) {
      return 0
    }

    let a = f(node.left)
    let b = f(node.right)

    if (a == -1 || b == -1 || Math.abs(a - b) > 1) {
      return -1
    } else {
      return (a > b ? a : b) + 1
    }
  }
}
