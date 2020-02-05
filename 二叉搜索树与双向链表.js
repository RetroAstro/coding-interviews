/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function convert(root) {
  let list = []

  inOrder(root)

  for (let i = 1; i < list.length; i++) {
    list[i - 1].right = list[i]
    list[i].left = list[i - 1]
  }

  return list[0]

  function inOrder(node) {
    if (node == null) {
      return
    }
    inOrder(node.left)
    list.push(node)
    inOrder(node.right)
  }
}
