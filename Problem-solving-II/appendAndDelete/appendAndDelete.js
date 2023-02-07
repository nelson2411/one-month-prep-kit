/*
You have two strings of lowercase English letters. You can perform two types of operations on the 
first string:

1. Append a lowercase English letter to the end of the string.
2. Delete the last character of the string. 
Performing this operation on an empty string results in an empty string.

Given an integer k, and two strings s and t, determine whether or not you can convert s to t by
performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No.

Example input: 
s = [a,b,c]
t = [d,e,f]
k = 6

Example output: Yes
In this example, the result is Yes because we can convert s to t by performing the following 
sequence of operations: 
1. Delete the last character in s (i.e., [a,b,c] -> [a,b]).
2. Delete the last character in s (i.e., [a,b] -> [a]).
3. delete the last character in s (i.e., [a] -> []).
4. Append a character to s (i.e., [] -> [d]).
5. Append a character to s (i.e., [d] -> [d,e]).
6. Append a character to s (i.e., [d,e] -> [d,e,f]).
Six moves in total, which is equal to k = 6.



*/

const s = "hackerhappy"
const t = "hackerrank"
const k = 9

const appendAndDelete = (s, t, k) => {
  let i = 0 // 1, 2, 3, 4, 5, 6
  let j = 0 // 1, 2, 3, 4, 5, 6
  let count = 0

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
      j++
    } else {
      break
    }
  }

  count = s.length - i + t.length - j // count will be equal to 6, where s.length = 11 - 6 + t.length = 10 - 6 = 6

  if (count > k) {
    return "No"
  } else if (count % 2 === k % 2) {
    return "Yes"
  } else if (s.length + t.length < k) {
    return "Yes"
  } else {
    return "No"
  }
}
