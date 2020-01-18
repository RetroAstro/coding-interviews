let stackX = []
let stackY = []

function push(node) {
  stackX.push(node)
}

function pop() {
  if (stackX.length == 0) {
    return null
  }
  while (stackX.length > 1) {
    stackY.push(stackX.pop()) 
  }
  let res = stackX.pop()
  while (stackY.length) {
    stackX.push(stackY.pop())
  }
  return res
}

