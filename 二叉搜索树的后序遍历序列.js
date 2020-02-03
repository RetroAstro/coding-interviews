function verifySequenceOfBST(sequence) {
  if (sequence == null || sequence.length == 0) {
    return false
  }
  return isBST(sequence, 0, sequence.length - 1)

  function isBST(sequence, start, end) {
    if (start >= end) {
      return true
    }

    let node = sequence[end]
    
    let i = start
    for (; i < end; i++) {
      if (sequence[i] > node) {
        break
      }
    }
    let j = i
    for (; j < end; j++) {
      if (sequence[j] < node) {
        return false
      }
    }

    return isBST(sequence, start, i - 1) && isBST(sequence, i, end - 1)
  }
}
