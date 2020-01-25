/*function ListNode(x) {
    this.val = x
    this.next = null
}*/
function merge(head1, head2) {
  if (head1 == null) {
    return head2
  }
  if (head2 == null) {
    return head1
  }

  if (head1.val > head2.val) {
    head2.next = merge(head1, head2.next)
    return head2
  } else {
    head1.next = merge(head1.next, head2)
    return head1
  }
}
