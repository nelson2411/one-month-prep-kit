/*
HackerLand Enterprise is adopting a new viral advertising strategy. 
When they launch a new product, they advertise it to exactly 5 people on social media.

On the first day , half of those 5 people (i.e., floor(5/2) = 2) like the advertisement 
and each shares it with 3 of their friends.
At the beginning of the second day, floor(5/2) x 3 = 2 x 3 = 6 people receive the advertisement.
So, Each day floor(recipients/2) of the recipients like the advertisement and will share it 
with 3 friends on the following day. Assuming nobody receives the advertisement twice,
determine how many people have liked the ad by the end of a given day, 
beginning with launch day as day 1.

Example
n = 5

Day  Shared  Liked  Cumulative
1      5       2       2
2      6       3       5
3      9       4       9
4     12       6      15
5     18       9      24

The cumulative number of likes is 24. 

Create a function viralAdvertising(n) that takes an integer n and returns the cumulative number of likes.
Where n is the number of days. The function must return an integer representing the number of 
people who liked the advertisement during the first n days.



*/

const n = 3

const viralAdvertising = (n) => {
  let shared = 5
  let liked = 0
  let cumulative = 0

  for (let i = 0; i < n; i++) {
    liked = Math.floor(shared / 2)
    cumulative += liked // cumulative = cumulative + liked
    shared = liked * 3 // 3 is a constant meaning that each person shares the ad with 3 friends
  }
  return cumulative
}

/*

Writing this function in pseudocode: 

n = 3
function viralAdvertising(n) 
  shared = 5
  liked = 0
  cumulative = 0

  Repeat Starting with i = 0 until reaching n incrementing by 1 do
    liked = floor(shared / 2)
    cumulative = cumulative + liked
    shared = liked * 3
  end repeat
  return cumulative
end function
*/
