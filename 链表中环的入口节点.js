/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function entryNodeOfLoop(head) {
  let slow = head
  let fast = head
  let start = head

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      while (slow != start) {
        slow = slow.next
        start = start.next
      }
      return slow
    }
  }
  
  return null
}
