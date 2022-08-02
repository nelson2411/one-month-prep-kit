<?php
// You are choreographing a circus show with various animals. For one act, you are gien two kangaroos
// on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
// If it's possible, return YES, otherwise return NO.


function kangaroos($x1, $v1, $x2, $v2){
  $jumpNumber = ($x1 - $x2) / ($v2 - $v1); // number of jumps needed to get to the same location

  for($i = 0; $i < $jumpNumber; $i++){ // loop through the number of jumps needed to get to the same location
    $x1 += $v1; // add the jump distance to the first kangaroo's location
    $x2 += $v2; // add the jump distance to the second kangaroo's location
  }
  if($x1 == $x2){ // if the kangaroos are at the same location, return YES
    return "YES";
  } else {
    return "NO";
  }

}


?>