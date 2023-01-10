/* 
A person wants to determine the most expensive computer keyboard and USB drive
that can be purchased with a give budget. Given price lists for keyboards and
drives and a budget, find the cost to buy them. If it is not possible to buy
both items, return -1.

Example input: 

b = 60 -> budget
keyboards = [40, 50, 60] -> keyboards
drives = [5, 8, 12] -> drives

According to the example, the person can buy a 40 keyboard + 12 USB drive = 52,
or a 50 keyboard + 8 USB drive = 58. Choose the latter as the more expensive
option and return 58.

Complete the getMoneySpent function. It should return the maximum total price
for the two items within Monica's budget, or -1 if she cannot afford both items.

The function has the following parameters: 
    keyboards: an array of integers representing keyboard prices
    drives: an array of integers representing drive prices
    b: the units of currency in Monica's budget



*/

const b = 60 // budget
const keyboards = [40, 50, 60] // keyboards
const drives = [5, 8, 12] // drives

const getMoneySpent = (keyboards, drives, b) => {
  let max = -1
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        max = Math.max(max, keyboards[i] + drives[j])
        // if the sum of the keyboard and the drive is less than or equal to the budget, then add the keyboard and the drive
      }
    }
  }
  return max
}

/*
Writing the code in pseudocode:

b = 60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

function getMoneySpent(keyboards, drives, b)
    max = -1
    Repeat Starting at 0, until Reaching keyboards.length - 1, with increments of 1 Do
        Repeat Starting at 0, until Reaching drives.length - 1, with increments of 1 Do
            IF keyboards[i] + drives[j] <= b THEN
                max = Math.max(max, keyboards[i] + drives[j])
            END IF
        END REPEAT
    END REPEAT
    return max
END FUNCTION

*/
