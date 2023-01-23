/*
## Super Reduced String

Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
In each operation, select a pair of adjacent letters that match, and delete them.
Delete as many characters as possible using this method and return the resulting string.
If the final string is empty, return `Empty String`.

## Input Format

s = 'aab'

aab shortens to b in one operation: remove the adjacent a characters.

s = 'abba'
Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''.
Return 'Empty String'.

Create a function that takes a string and returns the super reduced string or 'Empty String'.


*/

const s = "aaabccddd"

const superReducedString = (s) => {
  let arr = s.split("")
  let i = 0
  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      // if the next element is the same as the current element
      arr.splice(i, 2) // remove 2 elements starting at index i
      i = 0 // reset i to 0
    } else {
      i++ // increment i
    }
  }
  return arr.length === 0 ? "Empty String" : arr.join("")
}

console.log(superReducedString(s))

console.log(superReducedString("baab"))

/*
s = 'aaabccddd'

function superReducedString(s) 
  arr = s.split('')  // We split the string into an array of characters
  i = 0
  Repeat Until i = arr.length - 1 Do // We loop through the array until we reach the last element
    If arr[i] = arr[i + 1] Then 
      arr.splice(i, 2)
      i = 0
      Else
      i = i + 1
    End If
  End Repeat
  If arr.length = 0 Then
    Return 'Empty String'
  Else
    Return arr.join('')
  End If
End Function




*/
