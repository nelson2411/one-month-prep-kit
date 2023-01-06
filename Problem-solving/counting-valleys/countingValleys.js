/* 
an avid hiker keeps meticulous records of their hikes. 
During the last hike that took exactly steps, for every step it was 
noted if it was an uphill, U, or a downhill, D step. 
Hikes always start and end at sea level, and each step up or down represents a 
1 unit change in altitude. We define the following terms:

* A mountain is a sequence of consecutive steps above sea level,
* a valley is a sequence of consecutive steps below sea level.

given the sequence of up and down steps during a hike, find and print the 
number of valleys walked through.

Example: 
steps = 8, path = [DDUUUUDD]

The hiker first enters a valley 2 units deep. Then they climb out an up onto a mountain 2 units high.
Finally, the hiker returns to sea level and ends the hike.

Create a function countingValleys that takes in the number of steps and the path of the hike.
The function should return an integer that denotes the number of valleys traversed.

Solution in pseudo code: 

steps = 8
path = [DDUUUUDD]

function countingValleys(steps, path)
valleys = 0
altitude = 0
repeat starting with i = 0 Until Reaching steps -1 with increments of 1 Do
    if path[i] = U then
        increment altitude by 1
        if altitude = 0 then
            increment valleys by 1
        end if
    else
        decrement altitude by 1
    end if
end repeat
return valleys


*/

const steps = 8
const path = "DDUUUUDD"

const countingValleys = (steps, path) => {
  let valleys = 0
  let altitude = 0
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      altitude++
      if (altitude === 0) {
        valleys++
      }
    } else {
      altitude--
    }
  }
  return valleys
}
