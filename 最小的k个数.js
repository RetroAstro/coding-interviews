function getLeastNumbers(input, k) {
  let { length } = input

  if (k > length) {
    return []
  }

  for (let i = 0; i < input.length; i++) {
    if (i == k) {
      break
    }
    let min = i
    for (let j = i + 1; j < length; j++) {
      if (input[min] > input[j]) {
        min = j
      }
    }
    if (i != min) {
      [input[i], input[min]] = [input[min], input[i]]
    }
  }

  return input.slice(0, k)
}
