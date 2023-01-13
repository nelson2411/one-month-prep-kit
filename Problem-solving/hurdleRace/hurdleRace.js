/*
a video player plays a game in which the character competes in a hurdle.
Hurdles have a height, and the characters have a maximum height they can jump.
There is a magic potion they can take that will increase their maximum 
jump height by 1 unit for each dose.
How many doses of the potion must the character take to be able to jump all of the hurdles.
If the character can already clear all of the hurdles, return 0.
a hurdle is an obstacle that the character must jump over.

Example input: 
k = 4
height = [1, 6, 3, 5, 2]

Example output:
2
where k is the maximum height the character can jump and height is an array of hurdle heights.
In order to be able to jump all of the hurdles, the character must take 2 doses of magic potion. 
Since the maximum height the character can jump is 4, and the tallest hurdle has a height of 6,
the character must take 2 doses of potion to be able to jump all of the hurdles.

Create a function named hurdleRace that takes in two parameters, k and height.
The function must return an integer denoting the minimum doses of magic potion the 
character must take to be able to jump all of the hurdles.


*/

const k = 4
const height = [1, 6, 3, 5, 2]

const hurdleRace = (k, height) => {
  // Write your code here
  let max = 0
  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i]
    }
  }
  if (max > k) {
    return max - k
  } else {
    return 0
  }
}

/*
Writing this function in pseudocode:

k = 4
height = [1, 6, 3, 5, 2]

function hurdleRace(k, height) 
  max = 0
  Repeat Starting with i = 0 until i < height.length do
    if height[i] > max
      max = height[i]
    end if
  end repeat
  if max > k
    return max - k
  else
    return 0
  end if
end function


*/
