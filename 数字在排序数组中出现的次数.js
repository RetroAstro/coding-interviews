function getNumberOfK(data, k) {
  let a = firstEqual(0, data.length - 1)
  let b = lastEqual(0, data.length - 1)
  
  if (a == -1 || b == -1) {
    return 0
  }
  return Math.abs(a - b) + 1

  function firstEqual(low, high) {
    while (low <= high) {
      let mid = (low + high) >> 1
      if (data[mid] > k) {
        high = mid - 1
      } else if (data[mid] < k) {
        low = mid + 1
      } else {
        if (mid == 0 || data[mid - 1] != k) {
          return mid
        }
        high = mid - 1
      }
    }
    return -1
  }

  function lastEqual(low, high) {
    while (low <= high) {
      let mid = (low + high) >> 1
      if (data[mid] > k) {
        high = mid - 1
      } else if (data[mid] < k) {
        low = mid + 1
      } else {
        if (mid == data.length - 1 || data[mid + 1] != k) {
          return mid
        }
        low = mid + 1
      }
    }
    return -1
  }
}
