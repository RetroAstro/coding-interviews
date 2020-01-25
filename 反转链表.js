/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function reverseList(head) {
  let prev = null
  let curr = head
  while (curr != null) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev
}
