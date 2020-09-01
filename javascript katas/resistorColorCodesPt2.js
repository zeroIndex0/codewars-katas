/*
Resistor Color Codes, Part 2
https://www.codewars.com/kata/5855777bb45c01bada0002ac


Overview

Resistors are electrical components marked with colorful stripes/bands to indicate both their resistance value in ohms and how tight a tolerance that value has. If you did my Resistor Color Codes kata, you wrote a function which took a string containing a resistor's band colors, and returned a string identifying the resistor's ohms and tolerance values.

Well, now you need that in reverse: The previous owner of your "Beyond-Ultimate Raspberry Pi Starter Kit" (as featured in my Fizz Buzz Cuckoo Clock kata) had emptied all the tiny labeled zip-lock bags of components into the box, so that for each resistor you need for a project, instead of looking for text on a label, you need to find one with the sequence of band colors that matches the ohms value you need.
The resistor color codes

You can see this Wikipedia page for a colorful chart, but the basic resistor color codes are:

0: black, 1: brown, 2: red, 3: orange, 4: yellow, 5: green, 6: blue, 7: violet, 8: gray, 9: white

All resistors have at least three bands, with the first and second bands indicating the first two digits of the ohms value, and the third indicating the power of ten to multiply them by, for example a resistor with a value of 47 ohms, which equals 47 * 10^0 ohms, would have the three bands "yellow violet black".

Most resistors also have a fourth band indicating tolerance -- in an electronics kit like yours, the tolerance will always be 5%, which is indicated by a gold band. So in your kit, the 47-ohm resistor in the above paragraph would have the four bands "yellow violet black gold".
Your mission

Your function will receive a string containing the ohms value you need, followed by a space and the word "ohms" (to avoid Codewars unicode headaches I'm just using the word instead of the ohms unicode symbol). The way an ohms value is formatted depends on the magnitude of the value:

    For resistors less than 1000 ohms, the ohms value is just formatted as the plain number. 
    For example, with the 47-ohm resistor above, your function would receive the string "47 ohms", 
    and return the string `"yellow violet black gold".

    For resistors greater than or equal to 1000 ohms, but less than 1000000 ohms, the ohms value 
    is divided by 1000, and has a lower-case "k" after it. For example, if your function received 
    the string "4.7k ohms", it would need to return the string "yellow violet red gold".

    For resistors of 1000000 ohms or greater, the ohms value is divided by 1000000, and has an 
    upper-case "M" after it. For example, if your function received the string "1M ohms", it would 
    need to return the string "brown black green gold".

Test case resistor values will all be between 10 ohms and 990M ohms.
More examples, featuring some common resistor values from your kit

"10 ohms"        "brown black black gold"
"100 ohms"       "brown black brown gold"
"220 ohms"       "red red brown gold"
"330 ohms"       "orange orange brown gold"
"470 ohms"       "yellow violet brown gold"
"680 ohms"       "blue gray brown gold"
"1k ohms"        "brown black red gold"
"10k ohms"       "brown black orange gold"
"22k ohms"       "red red orange gold"
"47k ohms"       "yellow violet orange gold"
"100k ohms"      "brown black yellow gold"
"330k ohms"      "orange orange yellow gold"
"2M ohms"        "red black green gold"



Thoughts.  Ill have to look for no letter, letter k or the letter M
wonder if ill need to verify input
Then, set the color based on the numbers.  Maybe have an object for the value: color
Will have to multiply or divide given the letter k = 1000  M = 1000000
The seperate it out out.  The first two numbers are the color and the last is the number
of zeros needed to make the rest of the number.  Then, i suppose gold is always the last

The last five characters and not needed for any data.  They are a space and the word ohms.
They are not used for anything.  The only thing we need are the numbers and the letter k or M
*/

/*
After thoughts:
    I see i can change some things. I dont need the for loop.  I simply could have just passed 
    in the values knowing they are always going to be at index zero, one and then the length of
    the all the zeros (length-2). So the forloop is not needed.

    I could have used a replace instead of a slice for the last 5 characters.
    I could have checked my letter with an str.endsWith() instead of slicing it into a variable.
    These two are kind of nit picky, but the for loop really is unnecessary.
*/

// ======================== Refactored Code ============================= \\
function encodeResistorColors(ohmsString) {
    const colorValues = {
        0: "black",
        1: "brown",
        2: "red",
        3: "orange",
        4: "yellow",
        5: "green",
        6: "blue",
        7: "violet",
        8: "gray",
        9: "white"
    }
    ohmsString = ohmsString.replace(" ohms", '');
    let ohms = 0;
    let result = '';
    if (ohmsString.endsWith('k')) {
        ohms = (ohmsString.slice(0, ohmsString.length - 1) * 1000).toString();
    } else if (ohmsString.endsWith('M')) {
        ohms = (ohmsString.slice(0, ohmsString.length - 1) * 1000000).toString();
    } else {
        ohms = ohmsString;
    }
    result += colorValues[ohms[0]] + ' ';
    result += colorValues[ohms[1]] + ' ';
    if (ohms.length > 2) result += colorValues[ohms.length - 2];
    if (ohms.length < 3) result += "black"
    return result += " gold";
}



// // ======================== Submitted Code ============================= \\
// function encodeResistorColors(ohmsString) {
//     const colorValues = {
//         0: "black",
//         1: "brown",
//         2: "red",
//         3: "orange",
//         4: "yellow",
//         5: "green",
//         6: "blue",
//         7: "violet",
//         8: "gray",
//         9: "white"
//     }
//     ohmsString = ohmsString.slice(0, ohmsString.length - 5);
//     let letter = ohmsString.slice(ohmsString.length - 1);
//     let ohms = 0;
//     let result = '';
//     if (letter === "k") {
//         ohms = (ohmsString.slice(0, ohmsString.length - 1) * 1000).toString();
//     } else if (letter === "M") {
//         ohms = (ohmsString.slice(0, ohmsString.length - 1) * 1000000).toString();
//     } else {
//         ohms = ohmsString.toString();
//     }
//     for (let i = 0; i < ohms.length; i++) {
//         if (i <= 1) {
//             result += colorValues[ohms.charAt(i)] + ' ';
//         } else {
//             result += colorValues[ohms.length - 2];
//             break;
//         }
//     }
//     if (ohms.length < 3) result += "black"
//     return result += " gold";
// }

console.log(encodeResistorColors("10 ohms"), "brown black black gold")
console.log(encodeResistorColors("47 ohms"), "yellow violet black gold")
console.log(encodeResistorColors("100 ohms"), "brown black brown gold")
console.log(encodeResistorColors("220 ohms"), "red red brown gold")
console.log(encodeResistorColors("330 ohms"), "orange orange brown gold")
console.log(encodeResistorColors("470 ohms"), "yellow violet brown gold")
console.log(encodeResistorColors("680 ohms"), "blue gray brown gold")
console.log(encodeResistorColors("1k ohms"), "brown black red gold")
console.log(encodeResistorColors("4.7k ohms"), "yellow violet red gold")
console.log(encodeResistorColors("10k ohms"), "brown black orange gold")
console.log(encodeResistorColors("22k ohms"), "red red orange gold")
console.log(encodeResistorColors("47k ohms"), "yellow violet orange gold")
console.log(encodeResistorColors("100k ohms"), "brown black yellow gold")
console.log(encodeResistorColors("330k ohms"), "orange orange yellow gold")
console.log(encodeResistorColors("1M ohms"), "brown black green gold")
console.log(encodeResistorColors("2M ohms"), "red black green gold")
console.log(encodeResistorColors("990M ohms"), "white white violet gold")



//this code is 100% unedited.  It shows the ways I tried and how many console logs i needed
//to keep track of my values.  There were some steps i thought i needed, but never used because
//after punching them in, i realized i didnt need them.  Actual cleaned up submitted code is above.
// function encodeResistorColors(ohmsString) {
//     const colorValues = {
//         0: "black",
//         1: "brown",
//         2: "red",
//         3: "orange",
//         4: "yellow",
//         5: "green",
//         6: "blue",
//         7: "violet",
//         8: "gray",
//         9: "white"
//     }
//     console.log(ohmsString.slice(0, ohmsString.length - 5));
//     ohmsString = ohmsString.slice(0, ohmsString.length - 5); //the last 5 chars are meaningless
//     let letter = ohmsString.slice(ohmsString.length - 1);
//     console.log(letter);
//     let ohms = 0;
//     let ohmsIndividualNumbers;
//     let result = '';
//     console.log(ohmsString);
//     if (letter === "k") {
//         ohms = (ohmsString.slice(0, ohmsString.length - 1) * 1000).toString();
//         console.log(ohms.length);
//     } else if (letter === "M") {
//         ohms = (ohmsString.slice(0, ohmsString.length - 1) * 1000000).toString();
//         console.log(ohms.length);
//     } else {
//         ohms = ohmsString.toString();
//         console.log(ohms.length);
//     }
//     ohmsIndividualNumbers = ohms.split('');
//     console.log(ohmsIndividualNumbers);
//     console.log(ohms.charAt(0));
//     for (let i = 0; i < ohms.length; i++){
//         if(i <= 1) {
//             console.log(i);
//             result += colorValues[ohms.charAt(i)] + ' ';
//         } else {
//             //if you subtract the two numbers we already used, the length will show us the amount
//             //of zeros that remain
//             console.log(ohms.length-2);
//             console.log(colorValues[ohms.length-2])
//             result += colorValues[ohms.length-2];
//             break;
//         }
//     }
//     if(ohms.length < 3) result += "black" //there are in fact zero zeros
//     console.log(result);
//     return result += " gold";
// }