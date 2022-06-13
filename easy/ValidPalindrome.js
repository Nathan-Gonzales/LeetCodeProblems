/*  Problem: 
    https://leetcode.com/problems/valid-palindrome/

    Description: 
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
    non-alphanumeric characters, it reads the same forward and backward. 
    Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.

    Constraints: 
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

    Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

    Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
*/

// Solution: -------------------------------------------
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const regex = /[^A-Za-z0-9]/g;
    const newStr = s.replace(regex, "");
    const lowercaseString = newStr.toLowerCase();
    const phrase = lowercaseString.split('');
    
    let mid = phrase.length / 2;
    
    const even = phrase.length % 2 === 0 ? true : false;
    
    mid = Math.floor(mid);
    const firstHalf = phrase.slice(0, mid);
    const secondHalf = even ? phrase.slice(mid) : phrase.slice(mid + 1);
    
    if(firstHalf.toString() === secondHalf.reverse().toString()){
        return true;
    }
    return false;
    
    
};