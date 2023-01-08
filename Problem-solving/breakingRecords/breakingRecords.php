<?php
/* 
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and 
least points in a game. Points scored in the first game establish her record for the season,
and she begins counting from there.


For example, assume her scores for the season are represented in the 
array scores = [12, 24, 10, 24].
Scores are in the same order as the games played. She would tabulate her results as follows:
                                  Count                   
Game  Score  Minimum  Maximum   Min Max
  0      12     12       12       0   0
  1      24     12       24       0   1
  2      10     10       24       1   1
  3      24     10       24       1   1

Given the scores for a season, find and print the number of times Maria breaks her 
records for most and least points scored during the season.


We must create a function that takes an array of scores and returns an array of integers denoting 
the respective numbers of times she broke her records.

Example input: 
array = [10, 5, 20, 20, 4, 5, 2, 25, 1]
output: [2, 4] 
where the first element is the number of times she broke her record for most points scored
and the second element is the number of times she broke her record for least points scored.


*/


$scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords($scores) {
    $min = $scores[0];
    $max = $scores[0];
    $minCount = 0;
    $maxCount = 0;
    for($i = 1; $i < count($scores); $i++){ 
      // count($scores) = 9; this is a built in function that counts the number of elements in an array
        if($scores[$i] < $min){
            $min = $scores[$i];
            $minCount++;
        }
        if($scores[$i] > $max){
            $max = $scores[$i];
            $maxCount++;
        }
    }
    return [$maxCount, $minCount];
}


?>