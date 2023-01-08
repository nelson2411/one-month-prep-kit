<?php
/*
given an array of integers and a positive integer k, determine the number of (i,j) pairs 
where i<j and ar[i]+ar[j] is divisible by k. 

Example input: 

ar = [1,2,3,4,5,6]
k = 5

output: 3

3 meaning that there are 3 pairs that meet the criteria: (1,4), (2,3), (4,6)

we must create a function that takes: 

n = the length of the array
ar = the array of integers
k = the positive integer

and return the number of pairs that meet the criteria.
*/

$ar = [1,2,3,4,5,6];

function divisibleSumPairs($n, $ar, $k) {
    $count = 0;
    for($i = 0; $i < $n; $i++){
        for($j = $i+1; $j < $n; $j++){
            if(($ar[$i] + $ar[$j]) % $k == 0){
                $count++;
            }
        }
    }
    return $count;
}







?>