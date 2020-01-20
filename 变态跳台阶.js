let map = {}

function jumpFloorII(number) {
  if (number == 0 || number == 1) return 1
  if (number == 2) return 2
  if (map[number]) return map[number]
  let res = 0
  for (let i = 1; i <= number; i++) {
    res += jumpFloorII(number - i)
  }
  map[number] = res
  return res
}

