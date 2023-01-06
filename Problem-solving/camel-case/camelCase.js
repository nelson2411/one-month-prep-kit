/* 
There is a secuence of words in CamelCase as a strings of letters, s, 
having the following properties:

* It is a concatenation of one or more words consisting of English letters.
* All letters in the first word are lowercase.
* For each of the subsequent words, the first letter is uppercase and rest of the 
letters are lowercase.

Given s, determine the number of words in s.

Example:
s = oneTwoThree
There are 3 words in the string.

Create a function camelCase that takes in a string s and returns the number of words in s.


*/

const s = "oneTwoThree"

const camelCase = (s) => {
  let words = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      words++
    }
  }
  return words
}

/* 

In pseudo code the camelCase function would be:

function camelCase(s)
words = 1
Repeat starting with i = 0 Until Reaching s.length -1 with increments of 1 Do
    if s[i] = s[i].toUpperCase() then
        increment words by 1
    end if
end repeat

return words


*/
