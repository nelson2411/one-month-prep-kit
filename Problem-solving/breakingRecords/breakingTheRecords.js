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

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

const breakingRecords = (scores) => {
  let min = scores[0] // set the minimum score to the first element of the array
  let max = scores[0] // set the maximum score to the first element of the array
  let minCount = 0 // initialize the minimum count to 0
  let maxCount = 0 // initialize the maximum count to 0
  for (let i = 0; i < scores.length; i++) {
    // iterate through the array of scores
    if (scores[i] < min) {
      // if the score at the current index is less than the minimum score
      min = scores[i] // set the minimum score to the score at the current index
      minCount++ // increment the minimum count
    }
    if (scores[i] > max) {
      // if the score at the current index is greater than the maximum score
      max = scores[i] // set the maximum score to the score at the current index
      maxCount++ // increment the maximum count
    }
  }
  return [maxCount, minCount]
}

/* 
Writing the solution in pseudo-code: 

scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) 
  min = scores[0]
  max = scores[0]
  minCount = 0
  maxCount = 0
  Repeat starting with i = 0 Until Reaching scores.length -1 with increments of 1 Do
    if scores[i] < min then
      min = scores[i]
      increment minCount by 1
    end if
    if scores[i] > max then   
      max = scores[i]
      increment maxCount by 1
    end if
  end repeat
  return [maxCount, minCount]



*/
