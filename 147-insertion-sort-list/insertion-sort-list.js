/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (!head || !head.next) return head;

    let cur = head;
    let dummy = new ListNode(0);

    while (cur !== null) {
        let nextNode = cur.next;
        let prev = dummy;

        while (prev.next !== null && cur.val > prev.next.val) {
            prev = prev.next
        }

        cur.next = prev.next;
        prev.next = cur;

        cur = nextNode
    }

    return dummy.next
};