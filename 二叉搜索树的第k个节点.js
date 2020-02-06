function KthNode(root, k) {
  let res = []

  inOrder(root)

  return res[k - 1]

  function inOrder(node) {
    if (node == null) {
      return
    }
    inOrder(node.left)
    res.push(node)
    inOrder(node.right)
  }
}
