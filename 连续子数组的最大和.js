function findGreatestSumOfArray(array) {
  let max = array[0]
  let dp = [array[0]]

  for (let i = 1; i < array.length; i++) {
    let sum = dp[i - 1] + array[i]
    if (sum > array[i]) {
      dp[i] = sum
    } else {
      dp[i] = array[i]
    }
    if (max < dp[i]) {
      max = dp[i]
    }
  }

  return max
}
