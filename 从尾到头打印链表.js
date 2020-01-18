/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function printListFromTailToHead(head) {
  let arr = []
  let curr = head

  while (curr != null) {
    if (arr.length) {
      arr.unshift(curr.val)
    } else {
      arr.push(curr.val)
    }
    curr = curr.next
  }

  return arr
}
