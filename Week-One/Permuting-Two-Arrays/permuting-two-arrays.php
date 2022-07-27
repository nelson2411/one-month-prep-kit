<?php
// There are two n element arrays of integers, A and B. 
// Permute them into some A' and B' such that the relation 
// A'[i] + B'[i] >=k holds for all i where 0 <= i < n.
// $k is a positive integer.
// $A = array of n integers.
// $B = array of n integers.

function twoArrays($k, $A, $B){
sort($A); // Sort the first array.
rsort($B); // Sort the second array.

 for($i = 0; $i < sizeof($A); $i++){
   if($A[$i] + $B[$i] < $k){
     return "NO"; // If the sum of the current elements in the two arrays is less than $k, then the relation does not hold.
   }
 }
  return "YES"; // If the sum of the current elements in the two arrays is greater than or equal to $k, then the relation holds.


}

?>