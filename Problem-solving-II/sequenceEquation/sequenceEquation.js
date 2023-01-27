/*
Given a sequence of n integers, p(1), p(2),...,p(n) where each element is distinct 
and satisfies 1 <= p(x) <= n. For each x where 1 <= x <= n, find any integer y such 
that p(p(y)) = x and keep a record of the value of y in an array. 

Example: 

p = [5, 2, 1, 3, 4]

each  value of x between 1 and n = 5, the length of the array p is analyzed as follows:

1. x = 1 = p(3), p(4) = 3, so p(p(4)) = 1
2. x = 2 = p(2), p(2) = 2, so p(p(2)) = 2
3. x = 3 = p(4), p(5) = 4, so p(p(5)) = 3
4. x = 4 = p(5), p(1) = 5, so p(p(1)) = 4
5. x = 5 = p(1), p(3) = 1, so p(p(3)) = 5

The values of y are [4, 2, 5, 1, 3]

Create a function that takes an array of integers as a parameter and returns an array of integers.

The return array must be the values of y for each x between 1 and n, where n is the length of the array p.



*/

const p = [2, 3, 1]

const permutationEquation = (p) => {
  let result = []
  for (let i = 1; i <= p.length; i++) {
    result.push(p.indexOf(p.indexOf(i) + 1) + 1)
  }
  return result
}

/*
Writing this algorithm in pseudocode:

p = [2, 3, 1]
function permutationEquation(p)
  result = []
  Repeat starting with i = 1 until reaching p.length incrementing by 1 do
    result.push(p.indexOf(p.indexOf(i) + 1) + 1)
    end Repeat
  return result
end function


*/
