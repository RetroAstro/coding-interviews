let stackX = []
let stackY = []

function push(node) {
  stackX.push(node)
  if (stackY.length == 0 || stackY[stackY.length - 1] >= node) {
    stackY.push(node)
  }
}

function pop() {
  let res = null
  if (stackX.length) {
    res = stackX.pop()
  }
  if (stackY.length && stackY[stackY.length - 1] == res) {
    stackY.pop()
  }
  return res
}

function top() {
  return stackX[stackX.length - 1]
}

function min() {
  return stackY[stackY.length - 1]
}
