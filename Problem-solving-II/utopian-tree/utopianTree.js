/*
The utopian tree goes through 2 cycles of growth every year. 
Each spring it doubles in height. Each summer, its height increases by 1 meter.

For example: 
period    height
0         1 -> Tree remains the same height
1         2 -> Tree doubles in height
2         3 -> Tree increases in height by 1 meter in summer
3         6 -> Tree doubles in height the next spring
4         7 -> Tree increases in height by 1 meter in summer
5         14 -> Tree doubles in height the next spring

Create a function that takes in the number of growth cycles and returns 
the height of the tree after the cycles.

If we a sample input of 4
The tree will be 7 meters tall after 4 cycles.
*/

const n = 4

function utopianTree(n) {
  let height = 1
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      height += 1
    } else {
      height *= 2
    }
  }
  return height
}

/* 

Write this function in pseudocode: 

n = 4

function utopianTree(n) 
  height = 1
  Repeat Starting with i = 1 until reaching n incrementing by 1 do 
    if i is even
      increment height by 1
    else
      multiply height by 2
  return height
end function

*/
