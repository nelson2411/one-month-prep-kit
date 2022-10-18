<?php

// Two players are playing a game of Tower Breakers! Player 1 always moves first,
// and both players always play optimally.The rules of the game are as follows:

// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of height x and reduce its height to y,
// where 1 < y < x and y evenly divides x.
// If the current player is unable to make a move, they lose the game.

// Given the values of n and m, determine which player will win.
// If the first player wins, return 1. Otherwise, return 2.

/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

 $n = 2;
 $m = 6;

function towerBreakers($n, $m) {
    // Write your code here
    if($m == 1){
        return 2;
    }
    if($n % 2 == 0){
        return 2;
    }
    return 1;

  }


?>