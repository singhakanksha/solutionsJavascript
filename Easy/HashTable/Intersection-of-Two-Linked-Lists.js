/**Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null. *//**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

var getIntersectionNode = function(headA, headB){
    let p1 = headA
    let p2 = headB
    while(p1 !== p2){
      p1 = p1 === null ? headB: p1.next
      p1 = p2 === null ? headA: p2.next
    }
    return p1
}
