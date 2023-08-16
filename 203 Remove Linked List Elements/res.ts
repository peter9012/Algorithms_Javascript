//  Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 删除头部节点
  while (head !== null && head.val === val) {
      head = head.next;
  }
  if (head === null) return head;
  let pre: ListNode = head, cur: ListNode | null = head.next;
  // 删除非头部节点
  while (cur) {
      if (cur.val === val) {
          pre.next = cur.next;
      } else {
          //此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null
          pre = pre.next as ListNode;
      }
      cur = cur.next;
  }
  return head;
};


const list = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
const valToRemove = 6;

const newHead = removeElements(list, valToRemove);
let current: ListNode | null = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
