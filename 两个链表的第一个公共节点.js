/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function findFirstCommonNode(head1, head2) {
  let map = {}

  let curr1 = head1
  while (curr1 != null) {
    map[curr1.val] = true
    curr1 = curr1.next
  }

  let curr2 = head2
  while (curr2 != null) {
    if (map[curr2.val]) {
      return curr2
    }
    curr2 = curr2.next
  }

  return null
}
