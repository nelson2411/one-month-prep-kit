/*

lily likes to play games with integers. She has created a new game where she determines 
the difference between a number and its reverse. For instance, given the number 12, its reverse is 21.
Their difference is 9. The number 120 reversed is 21, and their difference is 99.

she decides to apply her game to decision making. She will look at a numbered range of days 
and will only go to a movie on a beautiful day.

given a range of numbered days, [i...j] and a number k, determine the number of days in the range
that are beautiful. Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k.
If a day's value is a beautiful number, it is a beautiful day. 
Print the number of beautiful days in the range.


Example input:
i = 20
j = 23
k = 6

Example output:
2; Where 2 is the number of beautiful days in the range.

Create a function that takes in the range of days, and the number k, 
and returns the number of beautiful days in the range.
We must calculate the absolute value of the difference between the number and its reverse.
for calculating the absolute value, we can use the Math.abs() function.

1. Create a function that takes in the range of days, and the number k,
2. Create a variable that will hold the number of beautiful days in the range.
3. Create a for loop that will iterate through the range of days.
4. Create a variable that will hold the reverse of the current day.
5. Create a variable that will hold the absolute value of the difference 
between the current day and its reverse.
6. Create an if statement that will check if the absolute value of the difference 
between the current day and its reverse is evenly divisible by k.
7. If the absolute value of the difference between the current day and its reverse is evenly divisible by k,
increment the number of beautiful days in the range by 1.
8. Return the number of beautiful days in the range.

*/

const i = 14
const j = 25
const k = 3

const beautifulDays = (i, j, k) => {
  let beautifulDays = 0
  for (let day = i; day <= j; day++) {
    let reverse = parseInt(day.toString().split("").reverse().join("")) // we reverse the current day by converting it to a string, splitting it into an array, reversing the array, and joining it back into a string.
    let difference = Math.abs(day - reverse) // We use Math.abs() to calculate the absolute value of the difference between the current day and its reverse.
    if (difference % k === 0) {
      // We check if the absolute value of the difference between the current day and its reverse is evenly divisible by k.
      beautifulDays++
    }
  }
  return beautifulDays
}

/*
Writing this function in pseudocode:

i = 14
j = 25
k = 3

function beautifulDays(i, j, k)
  beautifulDays = 0
  Repeat Starting with day = i until reaching j incrementing by 1 do
    reverse = parseInt(day.toString().split("").reverse().join(""))
    difference = Math.abs(day - reverse)
    if difference is evenly divisible by k
      increment beautifulDays by 1
  return beautifulDays
end function

*/
