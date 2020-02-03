/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function findPath(root, expect) {
  if (root == null) {
    return []
  }

  let res = []
  let map = {}

  walk(root)
  res.sort((a, b) => b.length - a.length)
  return res
  
  function walk(node, arr = [], sum = 0) {
    if (node == null) {
      if (sum == expect) {
        let key = arr.join('')
        if (!map[key]) {
          res.push(arr)
        }
        map[key] = true
      }
      return
    }

    walk(node.left, [...arr, node.val], sum + node.val)
    walk(node.right, [...arr, node.val], sum + node.val)
  }
}
