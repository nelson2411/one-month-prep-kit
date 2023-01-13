/*
Input Format
h meaning the heights of each letter
word meaning the word to be printed

We are required to find the area of the word to be printed. 
The area of the word is the area of the rectangle formed by the word. 
The height of the rectangle is the maximum height of the letters in the word.
The width of the rectangle is the length of the word.

The return integer must be expressed in mm^2.

sample input:

h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5]
word = 'abc'

sample output:
9

Where a = 1, b = 3, c = 1. The word is 3 letters long, so the area of the word is 3 * 1 = 3.

Create a function that takes in the height array and the word to be printed.
And returns the area of the word to be printed.

first we need to find the maximum height of the letters in the word.
Then we need to find the length of the word.
Then we need to multiply the maximum height of the letters in the word with the length of the word.

Then we need to return the area of the word to be printed.


*/

const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5,
]
const word = "abc"

const designerPDFViewer = (h, word) => {
  let max = 0
  for (let i = 0; i < word.length; i++) {
    let index = word.charCodeAt(i) - 97 // 97 is the ascii value of 'a'
    if (h[index] > max) {
      // if the height of the letter is greater than the current max
      max = h[index] // set the max to the height of the letter
    }
  }
  return max * word.length
}

/*

Write this function in pseudocode: 

h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5]
word = 'abc'

function designerPDFViewer(h, word) 
    max = 0
    Repeat starting with i = = until reaching n - 1 incrementing by 1 Do
        index = word.charCodeAt(i) - 97
        if h[index] > max
            max = h[index]
        end if
    end repeat
    return max * word.length
end function


*/
