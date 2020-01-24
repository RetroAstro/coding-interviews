/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function findKthToTail(head, k) {
  let arr = []
  let curr = head
  while (curr != null) {
    arr.push(curr)
    curr = curr.next
  }
  return arr[arr.length - k]
}
