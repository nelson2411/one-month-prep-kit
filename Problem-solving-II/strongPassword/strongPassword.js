/*
Louise joined a social networking site to stay in touch with her friends. 
The signup page required her to input a name and a password. However, the password must be strong. 
The website considers a password to be strong if it satisfies the following criteria:
* Its length is at least 6.
* It contains at least one digit.
* It contains at least one lowercase English character.
* It contains at least one uppercase English character.
* It contains at least one special character. The special characters are: !@#$%^&*()-+

She typed a random string of length n in the password field but wasn't sure if it was strong.
Given the string she typed, can you find the minimum number of characters she must add 
to make her password strong?

Here are the different types of character that can be included in the solution: 
numbers: "0123456789"
lower_case: "abcdefghijklmnopqrstuvwxyz"
upper_case: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters: "!@#$%^&*()-+"

## Example input
password = 'Ab1'
## Example output
3, meaning she can make the password strong by adding 3 characters,
The password is missing a special character and a digit.

Create a function that takes a string and returns the minimum number of characters that
need to be added to make the password strong.

*/

const password = "#HackerRank"
const n = password.length

const minimumNumber = (n, password) => {
  let count = 0
  if (!/[0-9]/.test(password)) count++
  if (!/[a-z]/.test(password)) count++
  if (!/[A-Z]/.test(password)) count++
  if (!/[!@#$%^&*()\-+]/.test(password)) count++
  return count + Math.max(0, 6 - n - count)
}

console.log(minimumNumber(n, password))
console.log(minimumNumber(3, "Ab1")) // 3

/* 

password = '#HackerRank'
n = 12

function minimumNumber(n, password) 
  count = 0
  If Not /[0-9]/.test(password) Then
    count = count + 1
  End If
  If Not /[a-z]/.test(password) Then
    count = count + 1
  End If
  If Not /[A-Z]/.test(password) Then
    count = count + 1
  End If
  If Not /[!@#$%^&*()\-+]/.test(password) Then
    count = count + 1
  End If
  Return count + Math.max(0, 6 - n - count)
End Function



*/
