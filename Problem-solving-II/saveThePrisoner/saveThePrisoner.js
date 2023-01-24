/*
A jail has a number of prisoners and a number of treats to pass out to them. 
Their jailer decides the fairest way to divide the treats is to seat the prisoners 
around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat.
Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially 
around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others,
but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

Input example: 
n = 4; meaning 4 prisoners
m = 6; meaning 6 pieces of candy
s = 2; meaning start at prisoner 2

The prisoners arrange themselves in seats numbered 1 to 4.
Prisoners receive candy at positions 2,3,4,1,2,3. The prisoner to be warned sits in chair number 3.

Create a function that takes 3 parameters: n, m, s.
And returns the chair number of the prisoner to warn.



*/

const n = 7
const m = 19
const s = 2

const saveThePrisoner = (n, m, s) => {
  const remainder = m % n // We get the remainder of the division of m by n
  const chair = remainder + s - 1 // We add the remainder to the starting chair number and subtract 1, this in order to get the correct chair number
  if (chair > n) {
    // If the chair number is greater than the number of prisoners, we subtract the number of prisoners from the chair number
    return chair - n
  } else if (chair === 0) {
    return n
  } else {
    return chair
  }
}

/*
Writing this in pseudocode:

n= 7
m= 19
s= 2

function saveThePrisoner(n, m, s) 
  remainder = m % n
  chair = remainder + s - 1
  if chair > n
  Print chair - n
  else if chair === 0
  Print n
  else
  Print chair
end function


*/
