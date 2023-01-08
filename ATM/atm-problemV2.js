/*

 Build the logic of an ATM machine
 The ATM should operate under the given rules:
- The bills used for a withdrawal is removed from the ATM
- The ATM should always return the smallest amount of bills possible
  Example: a withdrawal of 500 should return 1 x 500 bill rather than 5 x 100 bills if possible
- The ATM can't give out more money than it contains
- The ATM can't give out amounts that the remaining bills doesn't add up to

The assignment
The ATM start with a predetermined amount of each bill:
- 2x1000
- 3x500
- 8x200
- 2x100

You will make seven withdrawals the specified order.
Note that based on the rules listed earlier some of the withdrawals
should be declined by the ATM:
1. 1600
2. 800
3. 400
4. 800
5: 300
5. 1000
6. 600
7. 700
7. 100

 When all of these withdrawals are completed the ATM is expected 
to be completely empty of bills and will not have given out more money 
than it contained at the start. Try to write a general solution that 
will also work with different amounts of bills, different types of bills 
and different withdrawal amounts than in the example give.

// approach two
// Using meoization and recursion

The function takes two arguments: 
- The amount to withdraw
- The denominations of bills available in the ATM
The function must return an object with the status of every withdrawal. 
*/

const denominations = {
  1000: 2,
  500: 3,
  200: 8,
  100: 2,
}

const withdrawals = [1600, 800, 400, 800, 300, 1000, 600, 700, 100]

// Keep in mind that some of the withdrawals should be declined by the ATM and the
// status of the withdrawal should be set to false

const totalAmountOfMoneyInATM = Object.keys(denominations).reduce(
  (acc, key) => {
    acc += key * denominations[key]
    return acc
  },
  0
)

const atm = (withdrawals, denominations) => {
  const status = {}
  const bills = Object.keys(denominations).sort((a, b) => b - a) // we sort the bills in descending order
  const withdraw = (amount, bills) => {
    if (amount === 0) return [] // if the amount is 0 we return an empty array
    if (amount < 0) return null // If the amount is negative we return null
    if (bills.length === 0) return null // if there are no more bills to withdraw we return null
    const bill = bills[0] // we set the bill to the first element in the bills array
    const amountOfBills = Math.min(
      Math.floor(amount / bill),
      denominations[bill]
    ) // we set the amount of bills to the minimum of the amount divided by the bill and the amount of bills in the denominations object
    const result = withdraw(amount - bill * amountOfBills, bills.slice(1))
    if (result === null) {
      return withdraw(amount, bills.slice(1))
    }
    return [...Array(amountOfBills).fill(bill), ...result] // we return the result of the recursion
  }
  for (let i = 0; i < withdrawals.length; i++) {
    const amount = withdrawals[i]
    const result = withdraw(amount, bills) // we call the withdraw function with the amount and the bills
    if (result === null) {
      status[amount] = "Insufficient funds"
    } else {
      status[amount] = "Success"
      result.forEach((bill) => {
        denominations[bill]--
      })
    }
  }
  return status
}

console.log(totalAmountOfMoneyInATM)
console.log(atm(withdrawals, denominations))
