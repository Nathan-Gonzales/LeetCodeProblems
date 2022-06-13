/*  Problem: 
    https://leetcode.com/problems/merge-two-sorted-lists/

    Description: 
    You are given the heads of two sorted linked lists list1 and list2.
    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    Return the head of the merged linked list.

    Constraints: 
    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.

    Example 1:
    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Example 2: 
    Input: list1 = [], list2 = []
    Output: []

    Example 3:
    Input: list1 = [], list2 = [0]
    Output: [0]
*/

// Solution: -------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {

    let dummy = new ListNode();
    let head = dummy;
    
    while(list1 !== null && list2 !== null){
        if(list1.val === list2.val){
            dummy.val = list1.val;
            dummy.next = new ListNode();
            list1 = list1.next;
            dummy = dummy.next;
        }
        else if(list1.val < list2.val){
            dummy.val = list1.val;
            dummy.next = new ListNode();
            list1 = list1.next;
            dummy = dummy.next;
        }
        else if(list1.val > list2.val){
            dummy.val = list2.val;
            dummy.next = new ListNode();
            list2 = list2.next;
            dummy = dummy.next;
        }
    }// end while
    

    if(list1 === null && list2 === null){
        if(head.next === null){
            return null
        }
    }
    else if(list1 === null){
        dummy.val = list2.val;
        dummy.next = list2.next;
    }
    else if(list2 === null){
        dummy.val = list1.val;
        dummy.next = list1.next;
    }
    return head;
};
