<?php
/* 

Create a function that counts the number of valleys walked through.
The function should return an integer that denotes the number of valleys a hiker walked through.

Example:
s = "UDDDUDUU"
The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. 
Finally, the hiker returns to sea level and ends the hike.

The function returns 1.

The function takes two parameters:
s: a string that represents the path
n: an integer that represents the number of steps in the path
*/

function countingValleys($steps, $path) {
    $valleys = 0;
    $level = 0;
    for ($i = 0; $i < $steps; $i++) {
        if ($path[$i] == "U") {
            $level++;
        } else {
            $level--;
        }
        if ($level == 0 && $path[$i] == "U") {
            $valleys++;
        }
    }
    return $valleys;
}



?>