/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultList = null;
    let cur = null;
    let carry = 0;

    while (l1 || l2 || carry) {
       let v1 = l1 ? l1.val : 0;
       let v2 = l2 ? l2.val : 0;

       let sum = v1 + v2 + carry

       if (sum >= 10) {
        carry = 1;
        sum = sum - 10
       } else {
        carry = 0
       }

       let node = new ListNode(sum);

       if (!resultList) {
        resultList = node;
        cur = resultList
       } else {
        cur.next = node;
        cur = cur.next
       }

       if (l1) l1 = l1.next
       if (l2) l2 = l2.next
    }

    return resultList
};