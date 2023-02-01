/*
An integer d is a divisor of an integer n if the remainder of n / d = 0.
Given an integer, for each digit that makes up the integer determine whether it is a divisor. 
Count the number of divisors occurring within the integer.

Example: 
124 -> 1, 2, 4 are all divisors of 124. Return 3.
111 -> 1, 1, 1 are all divisors of 111. Return 3.
10 -> 1 is a divisor of 10. Return 1.

Create a function named findDigits that takes an integer as an argument and returns 
an integer representing the number of digits of d that are divisors of d.


*/

const findDigits = (n) => {
  let count = 0
  let num = n.toString().split("")
  for (let i = 0; i < num.length; i++) {
    if (n % num[i] === 0) {
      count++
    }
  }
  return count
}
