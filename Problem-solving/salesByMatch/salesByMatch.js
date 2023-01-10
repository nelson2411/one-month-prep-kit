/*
There is a large pile of socks that must be paired by color. Given an array of integers 
representing the color of each sock, determine how many pairs of socks with matching colors 
there are.

Example input: 

n = 7
arr = [1,2,1,2,1,3,2]

where n is the number of socks in the pile and arr is the array of colors.

According to the example, there are 2 pairs of socks with matching colors. 
There are 3 odd socks left, one of each color. The number of pairs is 2.

Create a function that takes in an array of integers and the length of the array.
and return the number of pairs of socks with matching colors.



*/

const n = 7
const arr = [1, 2, 1, 2, 1, 3, 2]

const sockMerchant = (n, arr) => {
  let pairs = 0
  let colors = {}
  for (let i = 0; i < n; i++) {
    if (colors[arr[i]]) {
      // if the color is in the object
      pairs++ // add a pair
      delete colors[arr[i]] // then delete the color from the object after adding a pair
    } else {
      colors[arr[i]] = true // if the color is not in the object, add it
    }
  }
  return pairs
}

console.log(sockMerchant(n, arr)) // 2

/* 

Writing the code in pseudocode:

n = 7
arr = [1,2,1,2,1,3,2]

function sockMerchant(n, arr) 
    pairs = 0
    colors = {}
    Repeat Starting at 0, until Reaching n - 1, with increments of 1 Do
        IF colors[arr[i]] THEN
          increment pairs by 1
          delete colors[arr[i]]
        ELSE
          colors[arr[i]] = true
        END IF
    END REPEAT
    return pairs
END FUNCTION


*/
