/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function print(root) {
  if (root == null) {
    return []
  }

  let queue = [root]
  let res = []

  while (queue.length) {
    let arr = [], temp = []
    while (queue.length) {
      let node = queue.shift()
      arr.push(node.val)
      if (node.left) {
        temp.push(node.left)
      }
      if (node.right) {
        temp.push(node.right)
      }
    }
    queue = temp
    res.push(arr)
  }

  return res
}
