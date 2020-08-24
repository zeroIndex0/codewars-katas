console.log("hello");


console.log("its been a while, possibly far too long manybe?");


/*


kata: https://www.codewars.com/kata/probabilities-for-sums-in-rolling-cubic-dice/javascript


When we throw 2 classical dice (values on each side from 1 to 6) we have 36 (6 * 6) different results.

We want to know the probability of having the sum of the results equals to 11. For that result we have only the combination of 6 and 5. So we will have two events: {5, 6} and {6, 5}

So the probability for that result will be:

P(11, 2) = 2/(6*6) = 1/18    (The two is because we have 2 dice)

Now, we want to calculate the probability of having the sum equals to 8. The combinations for that result will be the following: {4,4}, {3,5}, {5,3}, {2,6}, {6,2} with a total of five combinations.

P(8, 2) = 5/36 

Things may be more complicated if we have more dices and sum values higher.

We want to know the probability of having the sum equals to 8 but having 3 dice.

Now the combinations and corresponding events are:

{2,3,3}, {3,2,3}, {3,3,2}
{2,2,4}, {2,4,2}, {4,2,2}
{1,3,4}, {1,4,3}, {3,1,4}, {4,1,3}, {3,4,1}, {4,3,1}
{1,2,5}, {1,5,2}, {2,1,5}, {5,1,2}, {2,5,1}, {5,2,1}
{1,1,6}, {1,6,1}, {6,1,1}

A total amount of 21 different combinations

So the probability is:
P(8, 3) = 21/(6*6*6) = 0.09722222222222222

Summarizing the cases we have seen with a function that receives the two arguments

rolldice_sum_prob(11, 2) == 0.0555555555 # or 1/18

rolldice_sum_prob(8, 2) ==  0.13888888889# or 5/36

rolldice_sum_prob(8, 3) == 0.0972222222222  # or 7/72

And think why we have this result:

rolldice_sum_prob(22, 3) == 0

Create the function rolldice_sum_prob() for this calculation.

Have a nice time!

(You do not have to round the results)

*/


// arr is the sum were looking for and total sides means total dice added



//Actual code submitted
function rolldiceSumProb(arr, totalSides) {
  let prob;
  let diceSides = [1, 2, 3, 4, 5, 6]
  let result = 0;

  for (let i = 0; i < diceSides.length; i++)
    result = anotherForNeeded(diceSides[i], totalSides - 1, arr, result, diceSides);
  prob = result / Math.pow(diceSides.length, totalSides);
  return prob;
}

function anotherForNeeded(currentSum, anotherPass, valueWeWant, total, arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = currentSum + arr[i];
    if (result === valueWeWant && anotherPass - 1 === 0)
      total++;
    if (anotherPass - 1 > 0)
      total = anotherForNeeded(result, anotherPass - 1, valueWeWant, total, arr);
  }
  return total;
}



// Basic test cases:
console.log(rolldiceSumProb(11, 2), 0.055555555555);
console.log(rolldiceSumProb(8, 2), 0.13888888889);
console.log(rolldiceSumProb(8, 3), 0.0972222222222);



//think its done pre snip
// let total = 0;
// let count = 0;
// let result = 0;
// for (let i = 0; i < diceSides.length; i++) {
//   total = diceSides[i];
//   result = anotherForNeeded(total, numberOfDice - 1, arr);
//   count++;
//   if (result === arr) {
//     // megaTotalCount++;
//   }
//   console.log(result)
// }
// console.log(megaTotalCount);
// // prob = Math.abs((megaTotalCount * numberOfDice - diceSides.length) / totalCombos);
// prob = megaTotalCount / totalCombos;


// function anotherForNeeded(currentTotal, anotherPass, valueWeWant) {
//   let result = 0;
//   console.log(anotherPass - 1);

//   for (let i = 0; i < diceSides.length; i++) {
//     result = currentTotal + diceSides[i];

//     if (result === valueWeWant && anotherPass - 1 === 0) {
//       megaTotalCount++;
//       console.log(megaTotalCount);
//     }

//     if (anotherPass - 1 > 0) {
//       console.log(result)
//       anotherForNeeded(result, anotherPass - 1, valueWeWant);
//     }
//   }
//   return result;
// }



// function anotherForNeeded(currentTotal, index, anotherPass, valueWeWant) {
//   let result = 0;
//   if (anotherPass - 1 > 0) {
//     console.log(anotherPass - 1);
//   }
//   console.log(index);
//   console.log(currentTotal);

//   for (let i = index; i < diceSides.length; i++) {
//     console.log(diceSides[i])
//     result = currentTotal + diceSides[i];
//     console.log(result);


//     if (result === valueWeWant) {
//       console.log("i: ", i, "index: ", index)
//       console.log("we have: ", result);
//       megaTotalCount++;
//       console.log(megaTotalCount);
//     }

//     if (anotherPass - 1 > 0) {
//       console.log(i)
//       anotherForNeeded(result, i, anotherPass - 1, valueWeWant);
//     }

//     console.log(result);
//   }
//   //takes the value passsed in and adds it to another value in a for loop
//   return result;
// }





// let total = 0;
// let count = 0;
// for (let i = 0; i < diceSides.length; i++) {
//   for (let j = 0; j < diceSides.length; j++) {
//     total = diceSides[i] + diceSides[j];
//     if (total === arr) {
//       count++;
//       console.log("i: ", i + 1);
//       console.log("j: ", j + 1)
//       console.log(total, "hooray");
//     }
//   }
// }
// console.log(count);
// prob = count / totalCombos;


// let total = 0;
// let count = 0;
// for (let i = 0; i < diceSides.length; i++) {
//   for (let j = 0; j < diceSides.length; j++) {
//     for (let k = 0; k < diceSides.length; k++) {
//       total = diceSides[i] + diceSides[j] + diceSides[k];
//       if (total === arr) {
//         count++;
//         console.log("i: ", i + 1);
//         console.log("j: ", j + 1)
//         console.log(total, "hooray");
//       }
//     }
//   }
// }
// console.log(count);
// prob = count / totalCombos;







//need a for loop function

//while total positons havent been counted
//count the current and move to the next.


//nested for loops, nest numberOfDice amount of times
// for 1 incriment 1 until 6
//


// 1 + 1 + 1
// 2 + 1 + 1
// 2 + 2 + 1
// 2 + 2 + 2
// 3 + 1 + 1 
// 3 + 2 + 1 
// 3 + 3 + 1 
// 3 + 3 + 2 
// 3 + 3 + 3


// let count = 0;
// while (count < totalCombos) {
// }

//i need to know whem im finished.  I'm finished when all values are at 6 and the position is at the end

//when i step forward i need to only incriment one value and move to the side.
//so i have current position then each from the current position


//i have to check each, unless there is some fancy trick, but i doubt it.


//   return prob;
// }






// // Basic test cases:
// console.log(rolldiceSumProb(11, 2), 0.055555555555);
// console.log(rolldiceSumProb(8, 2), 0.13888888889);
// console.log(rolldiceSumProb(8, 3), 0.0972222222222);