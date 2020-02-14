/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function isSymmetrical(root) {
  return fn(root, root)

  function fn(t1, t2) {
    if (t1 == null && t2 == null) return true
    if (t1 == null || t2 == null) return false

    return t1.val == t2.val && fn(t1.left, t2.right) && fn(t1.right, t2.left)
  }
}
