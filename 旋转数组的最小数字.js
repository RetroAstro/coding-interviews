function minNumberInRotateArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i]) {
      return arr[i]
    }
  }
}
