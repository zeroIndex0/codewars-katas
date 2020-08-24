//a code kata called "Your order, please" for js

/*

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

your_order("is2 Thi1s T4est 3a")
[1] "Thi1s is2 3a T4est"

*/


//Here we go, it's been a while since ive messed with js.  I have a 
//hackathon to go to next tuesday, so i need to brush up on some coding

//I have to grab each word and find a number inside the work ( between the spaces )
//then reorder the words by the number that is found inside them
//So, ill have to have an array which i can get by splitting at the spaces
//then ill have to reorder based on the number, which will be the hard part and what will
//take me some time to figure out



//split the string into an array that is split at the spaces
// function order(words) {
//     let splitWords = words.split(' ');
//     for(let i = 0; i < splitWords.length; i++) {
//         for(let j = 0; j < splitWords[i].length; j++) {
//             //now that i have each character, i need to figure out how to
//             //grab the numbers which will be characters
//             //im so stupid, i want to grab the numbers from the string
//             //and then take those numbers and order the array before joning
//             //but i cant think of the way to do that cause im a dumdum
//             //I would have to take the number in the word ( somehow )
//             //and then place that into sorted order... quickly
//             console.log(splitWords[j]);
//             //in here is where i need to get at the numbers inside the words
//             //and then sort based on those numbers and once i do that, this
//             //kata is done and wrapeed up and i can rest easy :)
//             //but sadly, i cannot do this tonight as i now have to go to bed
//             //since i have no idea how to access the data and that means
//             //that it will take me an extra couple of hours to figure out
//             splitWords.sort();
//             console.log(splitWords);
//             console.log(splitWords.join(' '));
//         }
//     }
//     return splitWords.join('');
// }
// //order the array based on the number inside the words

// //set back into a string and return the newly ordered string


// console.log(order("is2 Thi1s T4est 3a"));//, "Thi1s is2 3a T4est")
// //console.log(order("4of Fo1r pe6ople g3ood th5e the2"));//, "Fo1r the2 g3ood 4of th5e pe6ople")
// //console.log(order(""));//, "")



//trying and thinking about it
// function order(words) {
//     let splitWords = words.split(' ');
//     let splicedNumbers = words.replace(/\D*/g, '');
//     console.log(splicedNumbers);
//     splicedNumbers = splicedNumbers.split('');
//     console.log(splicedNumbers);
//     //console.log(splicedNumbers.sort());
//     for(let i = 0; i < splitWords.length; i++) {
//         for(let j = 0; j < splitWords[i].length; j++) {

//             console.log(splicedNumbers);
//             console.log(splitWords[j]);

//             // splicedNumbers.sort(function(a, b) {
//             //     console.log(splicedNumbers[a]);
//             //     console.log(splitWords[a]);
//             //     if(a - b) {
//             //         let temp = splitWords[a];
//             //         splitWords[a] = splitWords[b];
//             //         splitWords[b] = temp;
//             //     }
//             //     console.log(splitWords)
//             //     return a - b;
//             // });
//             splitWords.sort(function(a, b) {
//                 let tempA = a.replace(/\D*/g, '');
//                 let tempB = b.replace(/\D*/g, '');
//                 console.log(tempA);
//                 console.log(tempB);
//                 console.log(splitWords);
//                 return tempA - tempB
//             });
//             console.log(splicedNumbers);
//             console.log(splitWords);
//             //console.log(splitWords.join(' '));
//         }
//     }
//     return splitWords.join(' ');
// }
//order the array based on the number inside the words

//set back into a string and return the newly ordered string




//actual submitted code
// function order(words) {
//     let splitWords = words.split(' ');
//     for(let i = 0; i < splitWords.length; i++) {
//         for(let j = 0; j < splitWords[i].length; j++) {
//             splitWords.sort(function(a, b) {
//                 //replaces the string with only the number thats inside the string
//                 //and then swaps the index based on the number inside the string
//                 //the regex is 'remove anything that isnt a digit'
//                 let tempA = a.replace(/\D*/g, '');
//                 let tempB = b.replace(/\D*/g, '');
//                 return tempA - tempB
//             });
//         }
//     }
//     return splitWords.join(' ');
// }


//im stupid, i didnt need to have the second for loop after changing the way i handled the data
//now that i just pass in the one array and remove any non-digits i dont need each character
//inside each word.  So therefore i dont need the second for loop
//resubmitted to this code
function order(words) {
    let splitWords = words.split(' ');
    for(let i = 0; i < splitWords.length; i++) {
            splitWords.sort(function(a, b) {
                let tempA = a.replace(/\D*/g, '');
                let tempB = b.replace(/\D*/g, '');
                return tempA - tempB
            });
    }
    return splitWords.join(' ');
}



//TEST CASES:
console.log(order("is2 Thi1s T4est 3a"));//, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));//, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""));//, "")




//try doing 'greed is good' for your next kata :)
// https://www.codewars.com/kata/greed-is-good 

//or you could try 'evil auto correct prank'
// https://www.codewars.com/kata/evil-autocorrect-prank 