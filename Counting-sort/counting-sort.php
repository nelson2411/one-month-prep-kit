<?php
// Comparison sorting
// Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort($arr){
   $freqArray = array_fill(0, 100, 0); // We will fill the initial array with zeros. We set the limit to 100 because we will only be counting up to 100.
  for($i = 0; $i < sizeof($arr); $i++){
    $freqArray[$arr[$i]]++; // Increment the value of the current element in the array.
  }
  return $freqArray; // Return the array.
}




?>