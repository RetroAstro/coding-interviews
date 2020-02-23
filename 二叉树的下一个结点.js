/*function TreeLinkNode(x) {
    this.val = x
    this.left = null
    this.right = null
    this.next = null
}*/
function getNext(node) {
  if (node == null) {
    return
  }
  if (node.right) {
    let curr = node.right
    while (curr.left) {
      curr = curr.left
    }
    return curr
  }
  if (node.left == null || node.right == null) {
    if (node.next && node.next.left == node) {
      return node.next
    }
    let curr = node
    while (curr.next && curr.next.left != curr) {
      curr = curr.next
    }
    return curr.next
  }
}
