<?php
// Sean invented a game involving a 2n x 2n matrix where each cell of the matrix
// contains an integer. He can reverse any of its rows or columns any number of times. 
// The goal of the game is to maximize the sum of the elements in the n x n submatrix
// located in the upper-left quadrant of the matrix.
// Given the inital configurations for q matrices. Help Sean reverse the rows and columns
// of each matrix in the best possible way so that the sum of the elements
// in the matrix's upper-left quadrant is maximal.

function flippingMatrix($matrix){
  $number = count($matrix) / 2; 
  $max = 0;
  $total = 0;

  for($row = 0; $row < $number; $row++){
    for($col = 0; $col < $number; $col++){
      $max = max($matrix[$row][$col], $max);
      $max = max($matrix[$row][2 * n - $col - 1], $max);
      $max = max($matrix[2 * n - $row - 1][$col], $max);
      $max = max($matrix[2 * n - $row - 1][2 * n - $col - 1], $max);

      $total += $max;
      }
    }
    return $total;
  }
  




?>