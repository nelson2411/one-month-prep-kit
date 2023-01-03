/* 

A region where the house is located is denoted by s and t. 
The apple tree and orange tree are located at a and b respectively.
When a fruit falls from its tree, it lands d units of distance from its tree 
of origin along the x-axis.
a negative value of d means the fruit fell d units to the tree's left, and a positive 
value of d means it falls d units to the tree's right.

* Given the value of d for m apples and n oranges,
* can you determine how many apples and oranges will fall on Sam's house 
(i.e., in the inclusive range [s,t])?
For example: 
Sam's house is between s=7 and t=10.
The apple tree is located at a=4 and the orange at b=12.
There are m=3 apples and n=3 oranges. 
apples are thrown apples=[2,3,-4] units distance from a, 
and oranges=[3,-2,-4] units distance.
Adding each apple distance to the position of the tree, they land at [4+2,4+3,4+-4]=[6,7,0].
Oranges land at [12+3,12+-2,12+-4]=[15,10,8].
Thats means 1 apple and 2 oranges will fall in the inclusive range 7-10.
So we print: 1 2

Create a function countApplesAndOranges()
* It has the following parameter(s):
* s: integer, starting point of Sam's house location.
* t: integer, ending location of Sam's house location.
* a: integer, location of the Apple tree.
* b: integer, location of the Orange tree.
* apples: integer array, distances at which each apple falls from the tree.
* oranges: integer array, distances at which each orange falls from the tree.


Print two integers on two different lines:
* The first integer: the number of apples that fall on Sam's house.
* The second integer: the number of oranges that fall on Sam's house.

*/

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let applesCount = 0
  let orangesCount = 0
  apples.forEach((apple) => {
    if (a + apple >= s && a + apple <= t) {
      applesCount++
    }
  })
  oranges.forEach((orange) => {
    if (b + orange >= s && b + orange <= t) {
      orangesCount++
    }
  })
  console.log(applesCount)
  console.log(orangesCount)
}
