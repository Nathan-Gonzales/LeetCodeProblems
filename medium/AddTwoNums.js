/*  Problem: 
    https://leetcode.com/problems/add-two-numbers/

    Description: 
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit. 
    Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Constraints: 
    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.

    Example 1:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

    Example 2: 
    Input: l1 = [0], l2 = [0]
    Output: [0]

    Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Head = l1
    let l2Head = l2
    let l3 = new ListNode(0)
    let l3Head = l3
    let carry = 0

    while(l1 || l2){

        if(l1 && l2){
            let miniSum = l1.val + l2.val + carry
        
            if(miniSum >= 10){
                carry = 1
                l3.val = miniSum % 10
            }
            else{
                l3.val = miniSum
                carry = 0
            }
            l1 = l1.next
            l2 = l2.next
            if(l1 || l2){
                l3.next = new ListNode(0)
                l3 = l3.next
            }
        }
        else if(l1){
            let miniSum = l1.val + carry
        
            if(miniSum >= 10){
                carry = 1
                l3.val = miniSum % 10
            }
            else{
                l3.val = miniSum
                carry = 0
            }

            l1 = l1.next
            if(l1){
                l3.next = new ListNode(0)
                l3 = l3.next
            }
        }
        else if(l2){
            let miniSum = l2.val + carry
        
            if(miniSum >= 10){
                carry = 1
                l3.val = miniSum % 10
            }
            else{
                l3.val = miniSum
                carry = 0
            }
            
            l2 = l2.next
            if(l2){
                l3.next = new ListNode(0)
                l3 = l3.next
            }
        }

        if(!l1 && !l2 && carry){
            l3.next = new ListNode(1)
        }
    }

    return l3Head
};