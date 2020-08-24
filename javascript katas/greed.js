// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450


// so i have to look for all occurances of numbers and if there are 3 of each then they follow different rules
// there can also be more than three as well
// like 4 which would count three then one or even 5 which would count three then one and one
// and the only singles are 1 and 5


// should i pull out each and then do it or keep it all together. probably together


//this one was called greed is good.  would be kind of cool to do it in c++ since i havent used that language in a long time
//https://www.codewars.com/kata/greed-is-good/  do it in C++ mofo!  just search vectors and run forloops and switches. no biggie

function score(dice) {
  const tally = [0, 0, 0, 0, 0, 0];
  let total = 0;

  dice.forEach(e => {
    switch (e) {
      case 1:
        tally[0] += 1;
        break;
      case 2:
        tally[1] += 1;
        break;
      case 3:
        tally[2] += 1;
        break;
      case 4:
        tally[3] += 1;
        break;
      case 5:
        tally[4] += 1;
        break;
      case 6:
        tally[5] += 1;
        break;
    }
  });
  console.log(tally);

  tally.forEach((e, i) => {
    console.log(e);
    if (i === 0 || i === 4) {
      if (e >= 3) {
        i === 0 ? total += 1000 : total += 500;
        const temp = e - 3;
        i === 0 ? total += 100 * temp : total += 50 * temp;
      } else {
        i === 0 ? total += 100 * e : total += 50 * e;
      }
    } else if (e >= 3) {
      total += 100 * (i + 1);
    }
  });
  return total;
}

const dice = [5, 1, 3, 4, 1];
console.log(score([1, 1, 1, 3, 1]), 1100);
console.log(score([5, 1, 3, 4, 1]), 250);
console.log(score([2, 4, 4, 5, 4]), 450);
console.log(score([2, 3, 4, 6, 2]), 0);
console.log(score([4, 4, 4, 3, 3]), 400);
console.log(score([5, 5, 5, 5, 3]), 550);
console.log(score([1, 1, 1, 1, 1]), 1200);
console.log(score([5, 5, 5, 1, 1]), 700);








// Submitted C++ code to codewars.  Spoiler alert its the same code.  Well, the same logic, but different (slightly) syntax
//
// #include < iostream >
// #include < vector >

// int score(const std:: vector<int>& dice) {

// std::vector<int> roll = dice;
// int total = 0;
// int tally[] = {0, 0, 0, 0, 0, 0};
      
// for(std::vector<int>::iterator i = roll.begin(); i != roll.end(); i++) {
//   switch(*i) {
//     case 1:
//       tally[0] += 1;
//       break;
//     case 2:
//       tally[1] += 1;
//       break;
//     case 3:
//       tally[2] += 1;
//       break;
//     case 4:
//       tally[3] += 1;
//       break;
//     case 5:
//       tally[4] += 1;
//       break;
//     case 6:
//       tally[5] += 1;
//       break;
//   }
// }
        
// for(int i = 0; i < 6; i++) {
//   if (i == 0 || i == 4) {
//     if (tally[i] >= 3) {
//         i == 0 ? total += 1000 : total += 500;
//       int temp = tally[i] - 3;
//       i == 0 ? total += 100 * temp : total += 50 * temp;
//     } else {
//         i == 0 ? total += 100 * tally[i] : total += 50 * tally[i];
//       }
//   } else if (tally[i] >= 3) {
//         total += 100 * (i + 1);
//       }
//     }
// return total;
// }