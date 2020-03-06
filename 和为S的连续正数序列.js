function findContinuousSequence(sum) {
  let res = []
  let count = 2
  let num = 1

  function cal() {
    return count * (2 * num + count - 1) / 2
  }

  while (cal() <= sum) {
    while (true) {
      let temp = 0
      for (let i = 0; i < count; i++) {
        temp += (num + i)
      }
      if (temp == sum) {
        res.push([num, count])
        break
      }
      if (temp > sum) {
        break
      }
      num++
    }
    num = 1
    count++
  }

  return res.reverse().map(([num, count]) => {
    let temp = []
    for (let i = num; i < num + count; i++) {
      temp.push(i)
    }
    return temp
  })
}
