/*
Two friends are deciding how to split the bill at a dinner. 
Each will only pay for the items they consume.


For example, assume the bill has the following prices: bill = [2, 4, 6].
Alice declines to eat item k = bill[2] which costs 6.
If Brian calculates the bill correctly, Anna will pay (2 + 4)/2 = 3. 
If he includes the cost of bill[2], he will calculate (2 + 4 + 6)/2 = 6.
In the second case, he should refund 3 to Anna.

Create a function that takes in an array of prices, an item Anna didn't eat, 
and the amount of money Brian charged Anna for her portion of the bill.

The function should return 'Bon Appetit' if the bill is fairly split.
Otherwise, it should return the integer amount of money that Brian must refund to Anna.

bill is an array of integers representing the cost of each item ordered.
k is an integer representing the zero-based index of the item Anna doesn't eat.
b is the amount of money that Brian charged Anna for her share of the bill.

*/

function bonAppetit(bill, k, b) {
  let sum = 0
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      sum += bill[i]
    }
  }
  let half = sum / 2
  if (b === half) {
    console.log("Bon Appetit")
  } else {
    console.log(b - half)
  }
}

/*

Write the function bonAppetit in pseudocode:

function bonAppetit(bill, k, b) 
  sum = 0
  Repeat Starting with i = 0 Until Reaching bill.length - 1 with increments of 1 Do
    IF i !== k THEN
      increment sum by bill[i]
    END IF
  END REPEAT
  half = sum / 2
  IF b === half THEN
    print "Bon Appetit"
  ELSE
    print b - half
  END IF
END FUNCTION





*/
