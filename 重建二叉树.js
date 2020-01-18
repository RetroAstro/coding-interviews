/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function reConstructBinaryTree(pre, vin) {
  if (!pre.length || !vin.length) {
    return null
  }

  let node = new TreeNode(pre[0])
  let index = vin.indexOf(node.val)

  node.left = reConstructBinaryTree(pre.slice(1, index + 1), vin.slice(0, index))
  node.right = reConstructBinaryTree(pre.slice(index + 1), vin.slice(index + 1))

  return node
}
