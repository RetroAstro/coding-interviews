/*function Node(x) {
    this.label = x
    this.next = null
    this.random = null
}*/
function clone(head) {
  let map = new WeakMap()

  let curr1 = head
  while (curr1 != null) {
    map.set(curr1, new Node(curr1.label))
    curr1 = curr1.next
  }

  let curr2 = head
  while (curr2 != null) {
    let node = map.get(curr2)
    node.next = map.get(curr2.next)
    node.random = map.get(curr2.random)
    curr2 = curr2.next
  }

  return map.get(head)
}
