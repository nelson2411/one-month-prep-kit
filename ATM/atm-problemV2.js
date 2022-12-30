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
*/

const denominations = {
  1000: 2,
  500: 3,
  200: 8,
  100: 2,
}

const amount = [1600, 800, 400, 800, 300, 1000, 600, 700, 100]

const atm = (amount, denominations) => {
  // calculate the total amount of money in the ATM

  const totalAmount = Object.keys(denominations).reduce((acc, curr) => {
    return acc + denominations[curr] * curr
  }, 0)
  console.log(totalAmount)

  // check if the ATM has enough money to give out the current amount

  if (amount[0] > totalAmount) {
    return "ATM does not have enough money"
  }

  // Initialize an object to store the bills used for the withdrawal

  const bills = {}

  // itirate through the denominations object and check if the current withdrawal
  // amount is divisible by each bill value

  for (const [count, bill] of Object.entries(denominations)) {
    if (amount[0] % bill === 0) {
      // calculate the number of bills needed
      let numberOfBills = amount[0] / bill

      // add the bill and the number of bills used to the bills object
      bills[bill] = numberOfBills

      // remove the bills used from the ATM
      delete denominations[count]
      break
    }
  }

  // Recursively call the atm function with the remaining amount
  // and the remaining bills in the ATM

  let results = atm(amount.slice(1), denominations)

  // if the results is an string return the string
  if (typeof results === "string") {
    return results
  }

  // Otherwise, add the bills used for the current withdrawal to the results and return the results
  else {
    return { ...results, ...bills }
  }
}

let results = atm(amount, denominations)

console.log(results)
