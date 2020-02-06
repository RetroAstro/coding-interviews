/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function treeDepth(root) {
  if (root == null) {
    return 0
  }

  let queue = [root]
  let depth = 0

  while (queue.length) {
    depth++
    let temp = []
    while (queue.length) {
      let node = queue.shift()
      if (node.left) {
        temp.push(node.left)
      }
      if (node.right) {
        temp.push(node.right)
      }
    }
    queue = temp
  }

  return depth
}
