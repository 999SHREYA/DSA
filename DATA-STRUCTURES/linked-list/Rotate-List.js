/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // Edge cases
    if (!head || !head.next || k === 0) {
        return head;
    }

    // Step 1: Find length and last node
    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: Reduce unnecessary rotations
    k = k % length;

    if (k === 0) {
        return head;
    }

    // Step 3: Make list circular
    tail.next = head;

    // Step 4: Find new tail
    // New tail will be at position (length - k - 1)
    let stepsToNewTail = length - k;
    let newTail = head;

    for (let i = 1; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }

    // Step 5: Break the circle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};