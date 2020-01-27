/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function mirror(root) {
  invert(root, root)
  return root

  function invert(t1, t2, p1, p2) {
    if (t1 == null && t2 == null) {
      return
    }

    if (t1 == null && t2) {
      let temp = p2.right
      p2.right = null
      p1.left = temp
      invert(temp.left, temp.right, temp, temp)
    }
    else if (t2 == null && t1) {
      let temp = p1.left
      p1.left = null
      p2.right = temp
      invert(temp.left, temp.right, temp, temp)
    }
    else {
      [t1.val, t2.val] = [t2.val, t1.val]
      invert(t1.left, t2.right, t1, t2)
    }
    
    if (t1 && t2 && t1 != t2) {
      invert(t2.left, t1.right, t2, t1)
    }
  }
}
