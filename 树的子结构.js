/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function hasSubtree(root1, root2) {
  if (root2 == null) {
    return false
  }

  let flag = false
  prevOrder(root1)
  return flag

  function prevOrder(node) {
    if (node == null) {
      return
    }
    if (node.val == root2.val && hasSub(node, root2)) {
      flag = true
      return
    }
    prevOrder(node.left)
    prevOrder(node.right)
  }

  function hasSub(t1, t2) {
    if (t2 == null) return true
    if (t1 == null) return false

    return t1.val == t2.val && hasSub(t1.left, t2.left) && hasSub(t1.right, t2.right)
  }
}
