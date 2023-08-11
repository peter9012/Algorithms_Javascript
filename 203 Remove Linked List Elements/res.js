/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next = null) {
      this.val = val;
      this.next = next;
  }
}

var removeElements = function(head, val) {
  const ret = new ListNode(0, head);
  let cur = ret;
  while(cur.next) {
      if(cur.next.val === val) {
          cur.next =  cur.next.next;
          continue;
      }
      cur = cur.next;
  }
  return ret.next;
};


const list = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
const valToRemove = 6;

const newHead = removeElements(list, valToRemove);

let current = newHead;
while (current) {
    console.log(current.val);
    current = current.next;
}