/*
A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds
 that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until 
 it reaches the start again.
There is an array of clouds, c and an energy level e = 100. The character starts from c[0] and
uses 1 unit of energy to make a jump of size k to cloud c[(i+k)%n]. If it lands on a thundercloud,
c[i] = 1, its energy (e) decreases by 2 additional units. The game ends when the character lands

Given the values of n, k, and the configuration of the clouds as an array c, can you determine the
final value of e after the game ends?

Example: 

c = [0,0,1,0]
k = 2
The indices of her path are 0 -> 2 -> 0. Her energy level reduces by 1 for each jump to 98. 
She landed on one thunderhead at an additional cost of 2 energy units. Her final energy level is 96.

Create a function that takes an array of integers and an integer as parameters and returns an integer.
*/

const c = [0, 0, 1, 0, 0, 1, 1, 0]
const k = 2

const jumpingOnTheClouds = (c, k) => {
  let energy = 100
  for (let i = 0; i < c.length; i += k) {
    if (c[i] === 1) {
      energy -= 2
    }
    energy--
  }
  return energy
}
