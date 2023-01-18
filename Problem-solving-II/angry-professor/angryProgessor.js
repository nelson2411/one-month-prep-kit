/*
A discrete mathematics professor has a class of students. 
Frustrated with their lack of discipline, he decides to cancel class if fewer than 
some number of students are present when class starts. 
Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

given the arrival time of each student and a threshhold number of attendees, 
determine if the class is canceled.

Example input: 

n = 5
k = 3
a = [-2, -1, 0, 1, 2]

Where the the indexes of students a[0], a[1], and a[2] arrived on time, and a[3] and a[4] arrived late.
meaning that the class will go on because the number of students that arrived on time is greater 
than or equal to k, where k means the threshold number of attendees.

Example output:
Return YES. 

Create a function that takes in the number of students, the threshold number of attendees,
and return 'YES' if the class is canceled, or 'NO' if the class is not canceled.




*/

const k = 3
const a = [-2, -1, 0, 1, 2]

const angryProfessor = (k, a) => {
  let onTime = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      onTime++
    }
  }
  return onTime >= k ? "NO" : "YES"
}

/* 
Writing this function in pseudocode:

k = 3
a = [-2, -1, 0, 1, 2]

function angryProfessor(k, a)
  onTime = 0
  Repeat Starting with i = 0 until reaching a.length incrementing by 1 do
    if a[i] is less than or equal to 0
      increment onTime by 1
  if onTime is greater than or equal to k
    return 'NO'
  else
    return 'YES'
end function



*/
