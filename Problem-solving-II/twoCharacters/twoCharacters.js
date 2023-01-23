/*
Given a string, remove characters until the string is made up of any two alternating characters. 
When you choose a character to remove, all instances of that character must be removed. 
Determine the longest string possible that contains just two alternating letters.

## Example

s = 'abaacdabd'

1. Delete "a" to leave 'bcdbd'. String length is 5.
2. Now, remove "c" to leave 'bdbd'. String length is 4.
3. In this case, removing either "b" or "d" at any point would not result in a valid string. 
So, the answer is 4.

Given a s string, convert it to the longest possible string made up only of alternating characters.
Return the length of the string that can be created, or 0 if it cannot be done.

Create a function named alternate that takes a string as a parameter.
And return the length of the longest string that can be created, or 0 if it cannot be done.


Set is a javascript object that stores unique values of any type.
RegExp is a javascript object that is used for matching text with a pattern.
*/

const s = "beabeefeab"

const alternate = (s) => {
  let result = 0
  const unique = [...new Set(s.split(""))] // We get the unique characters in the string with Set
  // after removing the duplicates with the spread operator the new string is converted to an array
  // the new array will be: ["b", "e", "a", "f"]
  for (let i = 0; i < unique.length; i++) {
    // We iterate over the unique characters
    for (let j = i + 1; j < unique.length; j++) {
      // We iterate over the unique characters
      const regex = new RegExp(`[^${unique[i]}${unique[j]}]`, "g") // We create a regex with the current unique characters
      const str = s.replace(regex, "") // We remove all the characters that are not the current unique characters
      if (str.length > result && str.match(/(.)\1/) === null) {
        result = str.length
      }
    }
  }
  return result
}

console.log(alternate(s))

/*





*/
