/*  Problem: 
    https://leetcode.com/problems/valid-parentheses/

    Description: 
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

    Constraints: 
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

    Example 1:
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "()[]{}"
    Output: true

    Example 3:
    Input: s = "(]"
    Output: false
*/

// Solution: -------------------------------------------
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const chars = s.split('');
    let valid = true;
    const stack = [];
    const opens = ['(', '[', '{'];
    const pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }
    
    
    for(let i = 0; i < chars.length; i++){
        if(opens.includes(chars[i])){
           stack.push(chars[i]);
        }
        else{
            if(stack.pop() !== pairs[chars[i]]){
                valid = false;
                break;
            }
        }
    }
    
    if(stack.length !== 0){
        valid = false;
    }
    
    return valid;
    
    
};