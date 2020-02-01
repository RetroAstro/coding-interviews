/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function printFromTopToBottom(root) {
  if (root == null) {
    return []
  }
  let queue = [root]
  let res = []
  while (queue.length) {
    let node = queue.shift()
    res.push(node.val)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return res
}
