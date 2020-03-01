/* function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
} */
function serialize(root) {
  if (root == null) {
    return '[]'
  }

  let queue = [root]
  let str = ''

  while (queue.length) {
    let node = queue.shift()
    if (node) {
      str += `${node.val},`
      queue.push(node.left)
      queue.push(node.right)
    } else {
      str += `#,`
    }
  }

  return `[${str}]`
}

function deserialize(s) {
  if (s.length <= 2) {
    return null
  }

  let arr = s.substr(1, s.length - 1).split(',')
  let root = new TreeNode(arr.shift())
  let queue = [root]

  while (queue.length) {
    let node = queue.shift()

    let leftVal = arr.shift()
    if (leftVal != '#') {
      node.left = new TreeNode(leftVal)
      queue.push(node.left)
    }

    let rightVal = arr.shift()
    if (rightVal != '#') {
      node.right = new TreeNode(rightVal)
      queue.push(node.right)
    }
  }
  
  return root
}
