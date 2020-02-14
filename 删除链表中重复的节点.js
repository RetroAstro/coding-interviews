/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function deleteDuplication(pHead) {
  let head = new ListNode(-1)
  head.next = pHead

  let prev = null
  let curr = head
  let map = {}

  while (curr != null) {
    if (map[curr.val]) {
      map[curr.val].next = curr.next
      prev = map[curr.val]
    } else {
      map[curr.val] = prev
      prev = curr
    }
    curr = curr.next
  }

  return head.next
}
