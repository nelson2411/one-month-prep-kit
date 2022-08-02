<?php
// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array
// example: 
// $a = [2,6]; $b = [24 ,36];
// There are two numbers 6 and 12. 

function getTotalX($a, $b){
   $int = 0;
   for($k = $a[count($a) - 1]; $k <= $b[0]; $k++){
    $count1 = 0;
    $count2 = 0;
    for($i = 0; $i < count($a); $i++){
        if($k % $a[$i] == 0){
            $count1++;
        }
    }
    for($j = 0; $j < count($b); $j++){
        if($b[$j] % $k == 0){
            $count2++;
        }
    }
    if($count1 == count($a) && $count2 == count($b)){
        $int++;
    }

   }
    return $int;
}



?>