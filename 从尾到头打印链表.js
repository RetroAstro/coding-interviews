/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function printListFromTailToHead(head) {
  let arr = []
  let curr = head

  while (curr != null) {
    arr.unshift(curr.val)
    curr = curr.next
  }

  return arr
}
