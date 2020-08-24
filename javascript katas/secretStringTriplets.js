/*

https://www.codewars.com/kata/recover-a-secret-string-from-random-triplets


There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.



*/



// var recoverSecret = function (triplets) {

//   let result;
//   for(let i = 0; i < triplets.length; i++) {
//     console.log(triplets[i]);
//     console.log(triplets[i].join());
//   }
//   console.log(triplets.forEach(element => {
//     console.log(element);
//   }));

//   console.log(triplets.forEach(e=>{console.log(e.join(''))}));
// }



//put all triplet values into their own array or string and then loop over those while removing the very last of all the last!
// that should be easier.




// var recoverSecret = function (triplets) {

//   // console.log(triplets[1].pop())
//   // console.log(triplets[1].pop())
//   // console.log(triplets[1].pop())
//   // console.log(triplets[1].length)
//   // console.log(triplets)
//   for (let i = 0; i < triplets.length; i++) {
//     // let target = triplets[i][triplets[i].length-1];
//     let target = triplets[triplets.length - 1][triplets[i].length - 1];
//     console.log(target)
//     console.log(triplets[i]);
//     console.log(triplets[i][triplets[i].length - 1]);
//   }




//   //THIS IS GETTING MESSY, MAYBE I SHOULD START OVER FROM SCRATCH!
//   //yeah, i just need to start over :/   ugh, pain in the ass, this is super messy
//   //the last item in all the subarrays
//   let target = triplets[triplets.length - 1][triplets[triplets.length - 1].length - 1];
//   let subArrayLength = 3; //triplets
//   console.log(target);
//   let count = 0;
//   let match = false;
//   let result = [];
//   while (count < 10) {
//     console.log(triplets.length * subArrayLength);
//     for (let k = triplets.length - 1; k >= 0; k--) {
//       console.log(triplets[k][triplets[k].length - 1])
//       target = triplets[k][triplets[k].length - 1];
//       console.log(target);
//       match = false;
//       for (let i = triplets.length - 1; i >= 0; i--) {
//         for (let j = 0; j < triplets[i].length - 1; j++) {
//           if (match) break;
//           console.log(triplets[i][j]);
//           if (target === triplets[i][j]) {
//             count++;
//             match = true;
//             break;
//           }
//         }
//         //otherwise its the last letter
//         for (let i = 0; i < triplets.length; i++) {
//           if (triplets[i][triplets[i].length - 1] === target)
//             triplets[i].pop()
//         }
//       }
//       if (match === false) {
//         result += target;
//         console.log(target);
//         console.log(triplets[triplets.length - 1].length)
//         target = triplets[triplets.length - 1][triplets[triplets.length - 1].length - 1];
//         console.log(target);
//       } else {

//       }
//       //remove the last empty subarray
//       for (let i = 0; i < triplets.length; i++) {
//         if (triplets[i].length - 1 <= 0) {
//           console.log("didwepop?")
//           triplets.pop();
//           console.log(triplets)
//         }
//       }
//       console.log(triplets);
//       console.log(target)
//       console.log(triplets[triplets.length - 1].length)
//       console.log(result);
//       // whatisup
//       // pusitahw
//       count++;
//     }
//   }
//   console.log(triplets)



// }

//I have to handle empty subarrays

//while there are values left in the subarrays
//grab the last value in the last subarray
//check if that last value is not the last in any of the sub arrays

//if it is last, pop all those values out of each array
// for(let i = 0; i < triplets.length; i++) {
//   triplets[i].pop()
// }

//add that value to a variable
//start back with the last value in the last subarray again

//if we find the target inside the array, we need to decrement one space and go check again
// so should i start from the very last entry in the entire array? yes?
triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
]



// tup whi tsu ats hap tis whs

// t(upsi) u(p) p()
// nothing comes after p.. mark that as the end and remove all p's and move on
// tu whi tsu ats ha tis whs
// t(usi) u()
// nothing comes after u.. mark that as the end and remove all u's and move on
// t whi ts ats ha tis whs
// t(s) w(his) h(ias) i(s) s()
// nothing comes after s.. mark that as the end and remove all s's and move on
// t whi t at ha ti wh
// t(i) w(hi) i()
// nothing comes after i.. mark that as the end and remove all i's and move on
// t wh t at ha t wh
// t()
// nothing comes after t.. mark that as the end and remove all t's and move on
// wh a ha wh
// w(h) h(a) a()
// nothing comes after a.. mark that as the end and remove all a's and move on
// wh h wh
// w(h) h()
// nothing comes after h.. mark that as the end and remove all h's and move on
// w w
// w()
// nothing comes after w.. mark that as the end and remove all w's and move on

//have this pumping into a string, reverse, go to bed after a rank up :D

//i could also say, check the last value in the array, if it's in any other array thats not in the last position check another.
// if all instances of that letter are only on the last of the array, then that is that end letter.
// The problem would occur when i have to figure out how to remove that while still being able to check the end and then the case where there
//  would only be one value in the array.

// secret1 = "whatisup"
// triplets1 = [
//   ['t', 'u', 'p'],
//   ['w', 'h', 'i'],
//   ['t', 's', 'u'],
//   ['a', 't', 's'],
//   ['h', 'a', 'p'],
//   ['t', 'i', 's'],
//   ['w', 'h', 's']
// ]


// triplets1 = [
//   ['t--', 'u--', 'p--'],
//   ['w--', 'h--', 'i--'],
//   ['t--', 's--', 'u--'],
//   ['a--', 't--', 's--'],
//   ['h--', 'a--', 'p--'],
//   ['t--', 'i--', 's--'],
//   ['w--', 'h--', 's--']
// ]

// triplets1 = [
//   ['t', 'u', 'p'],
//   ['w', 'h', 'i'],
//   ['s'],
//   ['a']
// ]

// t(ususis) u(p) p() w(hihs) h(iaps) i(s) t(susis) s(u) u(p) a(tsp) t(sis) s() h(aps) a(p) p() t(is) i(s) s() w(hs) h(s) s()
// t(usi) u(p) p() w(his) h(iaps) i(s) t(sui) s(u) u(p) a(tsp) t(si) s() h(aps) a(p) p() t(is) i(s) s() w(hs) h(s) s() 
// t(usi) u(p) p() w(his) h(iaps) i(s) t(sui) s(u) u(p) a(tsp) t(si) s() h(aps) a(p) p() t(is) i(s) s() w(hs) h(s) s() 

// triplets1 = [
//   ['t', 'u', 'p'],
//   ['w', 'h', 'i'],
//   ['t', 's', 'u'],
//   ['a', 't', 's'],
//   ['h', 'a', 'p'],
//   ['t', 'i', 's'],
//   ['w', 'h', 's']
// ]

// //THIS IS WORKING, BUT PRE TOUCHUP
// var recoverSecret = function (triplets) {
//   let match = false;
//   let target = '';
//   let result = [];
//   let copiedData = triplets;
//   let filteredString = '';
//   copiedData.forEach(e => { filteredString += e.join('') });
//   filteredString = filteredString.split('').filter((e, p) => { return filteredString.indexOf(e) === p }).join('');
//   console.log(filteredString);
//   console.log(filteredString);

//   while (filteredString) {
//     for (let i = 0; i < filteredString.length; i++) {
//       target = filteredString[i];

//       //if you find a match that is not at the very end, then its not the letter we need
//       copiedData.forEach(e => {
//         e.forEach((e, i, arr) => {
//           if (e === target && i !== arr.length - 1 && arr.length > 0) {
//             match = true;
//           }
//         })
//       });

//       //if there wasnt a match, push it on the end as that's the value we're looking for
//       if (!match) {
//         result.push(target);
//         console.log(result);
//         //remove the current target from the string
//         filteredString = filteredString.split('').filter((e, i) => { return !(filteredString[i] === target) }).join('');
//         //pop off all values of the current target
//         for (let i = 0; i < copiedData.length; i++) {
//           for (let j = 0; j < copiedData[i].length; j++) {
//             if (copiedData[i][j] === target) {
//               console.log(copiedData[i].pop());
//             }
//           }
//         }
//       }
//       match = false;
//     }
//   }
//   return result.reverse().join('');
// }



//submitted code
var recoverSecret = function (triplets) {
  let match = false;
  let target = '';
  let result = [];
  let copiedData = triplets;
  let filteredString = '';
  copiedData.forEach(e => { filteredString += e.join('') });
  //remove duplicate letters
  filteredString = filteredString.split('').filter((e, p) => { return filteredString.indexOf(e) === p }).join('');

  while (filteredString) {
    for (let i = 0; i < filteredString.length; i++) {
      target = filteredString[i];

      //if you find a match that is not at the very end of a subarray, then it's not the letter we need
      copiedData.forEach(e => { e.forEach((e, i, arr) => { if (e === target && i !== arr.length - 1 && arr.length > 0) { match = true; } }) });

      //if there wasnt a match, push it on the end as that's the value we're looking for
      if (!match) {
        result.push(target);
        //remove the current target from the string
        filteredString = filteredString.split('').filter((e, i) => { return !(filteredString[i] === target) }).join('');
        //pop off all values of the current target from the subarrays.  it will always be the last value
        for (let i = 0; i < copiedData.length; i++)
          for (let j = 0; j < copiedData[i].length; j++)
            if (copiedData[i][j] === target) copiedData[i].pop();
      }
      match = false;
    }
  }
  return result.reverse().join('');
}



secret1 = "whatisup"
triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
]

console.log(recoverSecret(triplets1), secret1);

secret0 = "abcde"
triplets0 = [
  ['c', 'd', 'e'],
  ['a', 'b', 'c']
]

console.log(recoverSecret(triplets0), secret0)

