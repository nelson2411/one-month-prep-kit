<?php
// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguos segment of the bar selected such that: 
// The length of the segment matches Ron's birth month and the sum of the integers on the segment is equal to his birth day.
// Determine how many ways she can divide the chocolate bar.
// Example:
// $s = [2,2,1,3,2]
// $d = 4
// $m = 2


function birthday($s, $d, $m){
    $count = 0;
    for($i = 0; $i < count($s); $i++){ // loop through the array
        $sum = 0; // Initialize the sum of the segment
        for($j = $i; $j < $i + $m; $j++){ // loop through the segment
            $sum += $s[$j]; // add the integers to the sum
        }
        if($sum == $d){
            $count++;
        }
    }
    return $count; // return the number of ways to divide the chocolate bar

}

?>