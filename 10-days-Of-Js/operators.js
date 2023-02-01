/*
given the meal price (base cost of a meal), tip percent 
(the percentage of the meal price being added as tip), and tax percent 
(the percentage of the meal price being added as tax) for a meal,
find and print the meal's total cost. Round the result to the nearest integer.

Example: 
mealCost = 100, tipPercent = 15, taxPercent = 8
A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. 
Print the value 123 and return from the function.

given the function solve(meal_cost, tip_percent, tax_percent)
Where meal_cost is the cost of the meal, 
tip_percent is the tip percentage,


*/

const meal_cost = 100
const tip_percent = 15
const tax_percent = 8

const solve = (meal_cost, tip_percent, tax_percent) => {
  const tip = meal_cost * (tip_percent / 100)
  const tax = meal_cost * (tax_percent / 100)
  const totalCost = Math.round(meal_cost + tip + tax)
  console.log(totalCost)
}
