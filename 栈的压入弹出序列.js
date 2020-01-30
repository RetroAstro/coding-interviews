function isPopOrder(pushV, popV) {
  for (let i = 0; i < pushV.length; i++) {
    if (popV.indexOf(pushV[i]) == -1) {
      return false
    }
  }

  let max = 0

  for (let i = 0; i < pushV.length; i++) {
    if (max < pushV[i]) {
      max = pushV[i]
    }
  }

  let maxIndex = popV.indexOf(max)

  for (let i = 0; i < maxIndex; i++) {
    if (popV[i] > popV[i + 1]) {
      return false
    }
  }

  for (let i = maxIndex + 1; i < popV.length; i++) {
    if (popV[i - 1] < popV[i]) {
      return false
    }
  }

  return true
}
