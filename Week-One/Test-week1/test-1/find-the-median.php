<?php
// The median of a list of numbers is essentially its middle element after sorting.
// The same number of elements occur after it as before. 
// Given a list of numbers with an odd number of elements, find the median
// Example:
// arr = [5,3,1,2,4]
// The sorted array should be: arr = [1,2,3,4,5]
// The middle element is 3, so the median is 3.5.

function findMedian($arr) {
  // $arr must have an odd number of elements
  if (count($arr) % 2 == 0) {
    throw new Exception("Array must have an odd number of elements");
  }
  // Sort the array
  sort($arr);
  // Find the middle element
  $middle = count($arr) / 2;
  // Return the median
  return $arr[$middle];
    

   
    
    
}



?>