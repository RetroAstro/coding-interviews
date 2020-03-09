function maxInWindows(nums, size) {
  if (size == 0) {
    return []
  }

  let res = []

  for (let i = 0; i + size <= nums.length; i++) {
    res.push(nums.slice(i, i + size))
  }

  return res.map(findMax)

  function findMax(nums) {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
      if (max < nums[i]) {
        max = nums[i]
      }
    }
    return max
  }
}
