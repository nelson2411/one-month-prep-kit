<?php
/* 

Given a year y, find the date of the 256th day of that year according to the official 
Russian calendar during that year. Then print it in the format dd.mm.yyyy, 
where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

for example, the given year 1984. 1984 is divisible by 4, so it is a leap year.
The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.

Create a function dayOfTheProgrammer that takes an integer year as a parameter and 
returns a string in the format dd.mm.yyyy.

Example input: 2017
Example output: 13.09.2017

the month and day need to include zero if they are less than 10.

*/

function dayOfTheProgrammer($year) {
    // Write your code here
   if($year == 1918){
       return "26.09.1918";
    }else if($year < 1918){
        if($year % 4 == 0){
            return "12.09.$year";
        }else{
            return "13.09.$year";
        }
    }else{
        if($year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0)){
            return "12.09.$year";
        }else{
            return "13.09.$year";
        }
    }

}







?>