// notes for Float to Binary Conversion on codewars
// https://www.codewars.com/kata/540ddb07716ab397e1000797


/*
I need you to implement a function called float2bin that converts a float number to the corresponding 32-bit binary value. This involves analysing each part of the input number and appointing each bit of the output accordingly. See visual explanation from wiki below:

IEEE754 visual
[photo on website]

Rules:

    The conversion should match the IEEE754 Single precision 32-bit technical standard.
    The implementation should be able to handle both Strings ("123", "1.23") and Numbers (123, 1.23) as input.
    It should convert both positive and negative numbers.
    The output should always be a 32 characters long string, so padding of 0's is necessary if input is not negative.
    The point of this kata is to teach how floats are build on a binary level, so typed arrays are disabled.

Expectations and limitations:

    The input is valid numbers or strings of numbers.
    No weird edge cases are tested.
    Since there always is some rounding inaccuracy when working with floats, the last 5 characters in the output will not be checked. This is done using something similar to the approx function in the test fixture.

Here are some links to help you:

    https://en.wikipedia.org/wiki/Single-precision_floating-point_format
    http://www.binaryconvert.com/result_float.html


*/


// //TODO:  This whole thing works, but its super ugly, i need to refactor this to make it look much nicer as there is a lot of
// //       gross things going on here that can easily be shaped better.  Also, maybe my naming conventions can be changed as well
// //       as a 'for fun' project, i would like to refactor this in such a way that i can understand whats going on later
// //       if i ever decide to revisit this program.
// //       Another strange thing to note is the strange rounding at the end, also there are no edge cases, so its not super robust
// //       maybe at some point i can look at that and decide if i want to study what those edge cases are and what not

// // I need to break apart the numbers before and after the decimal
// function FloatToBinary(dec) {
//     let sign = '0';
//     let decSmallerThanOneFlag = 0;
//     let exponet = 0;
//     let exponetDigit = 0;
//     let exponetBits = '';
//     let storedFractionBits = '';
//     let result = '';
//     let fractionBits = 23;
//     let count = 0;

//     // I need to check the sign of the decimal - remember the sign then turn dec into a positive number
//     if (dec < 0) sign = '1';
//     if (Math.abs(dec) < 1) decSmallerThanOneFlag = 1;
//     dec = Math.abs(dec);
//     // we want the fraction to be positive, so we set it after the abs
//     let fraction = dec;
//     console.log(dec);

//     // I need to get the exponet
//     console.log(Math.floor(dec));
//     //numbers larger than 1 have a positive exponet
//     if (Math.floor(dec) >= 1) {
//         exponetBits = decimalToBinary(Math.floor(dec)).toString();
//         //remove the leading zeros
//         while (exponetBits[0] === '0') {
//             exponetBits = exponetBits.slice(1);
//         }
//         console.log(exponetBits);
//         exponet = exponetBits.length - 1;
//         console.log(exponet);
//         exponet += 127;
//         console.log(exponet);
//         console.log(decimalToBinary(exponet).toString());
//         exponet = decimalToBinary(exponet).toString();
//         exponetBits = exponetBits.substr(1);  //chop off the first digit as its not needed after we get our exponet, we just need whats after the decimal which is everything after the first digit.
//         // exponetBits = exponetBits.substr(1);
//         console.log(exponetBits);
//     } else {
//         //the number is smaller than one   TODO:  YOU ARE DOING THIS IN THE WRONG SPOT.  YOU HAVE TO FIND THE ZEROS AFTER BINARY CONVERSION... I THINK?
//         //I HAVE TO REWRITE EVERYTHING DEALING WITH SMALLER NUMBERS, AHHH!!!!!!!!!!!!!
//         //Turns out that i did have to redo this whole section as it wasnt needed.
//         // let exponetBits = decimalToBinary(dec.toString().split('.')[1]);
//         // console.log(exponetBits)
//         // console.log(exponetBits[0]);
//         // do {
//         //     exponetBits = exponetBits.substr(1);
//         //     exponet++;
//         //     console.log(exponetBits);
//         // } while (exponetBits[0] === '0');
//         // exponet++; //need one more after the last leading zero since the decimal stops AFTER the first number
//         // exponetBits = exponetBits.substr(exponet);  //remove the bits before the decimal as they are excess since its counted in the exponet
//         // console.log(exponetBits);
//         // console.log(exponet);
//         // exponetDigit = exponet;
//         // exponet = 127 - exponet;
//         // console.log(exponet);
//         // exponet = decimalToBinary(exponet).toString();
//         // console.log(exponet);

//     }

//     //if its smaller than 0, count the zeros leading up to the first number and the exponet is number of zeros + 1

//     // console.log(dec.toString().split('.'));
//     // fraction = Number(dec.toString().split('.')[1]); this gets the number after the decimal as a whole number, sadly not needed despite it being cool

//     // I need to get the last 23 bits - multiply by 2 drop the number in the front and add it to the stack
//     console.log(fraction);
//     let leadingZeroFlag = 1;
//     let exponentCounter = 1;
//     do {
//         if (fraction >= 1) {
//             fraction = numberAfterDecimal(fraction);
//         }
//         fraction *= 2;
//         if (fraction >= 1) {
//             storedFractionBits += '1';
//             leadingZeroFlag = 0;
//         } else {
//             storedFractionBits += '0';
//         }
//         console.log(fraction);
//         if(leadingZeroFlag) exponentCounter += 1;
//         count++;
//     } while (count < (fractionBits + exponentCounter - exponetBits.length));


//     console.log(sign);
//     console.log(exponet);
//     console.log(exponetBits);
//     console.log(storedFractionBits);
//     if (decSmallerThanOneFlag) {
//         // while (storedFractionBits[0] === '0') {
//         //     storedFractionBits = storedFractionBits.substr(1);
//         //     exponetDigit++;
//         //     console.log(storedFractionBits);
//         // }
//         // //go one further to chop off the leading 1
//         // storedFractionBits = storedFractionBits.substr(1);
//         // exponetDigit++;
//         // exponentCounter++;  //add one to the exponet to eliminate the leading 1
//         exponet = 127 - exponentCounter;
//         exponet = decimalToBinary(exponet).toString();
//         storedFractionBits = storedFractionBits.slice(exponentCounter);
//         console.log(storedFractionBits.length);

//         console.log(exponentCounter);
//         // if (storedFractionBits.length < 23) {
//         //     for (let i = 0; i < exponetDigit; i++) {
//         //         storedFractionBits += '0';
//         //     }
//         // }
//     }
//     storedFractionBits = exponetBits + storedFractionBits;
//     console.log(storedFractionBits.length);
//     if (storedFractionBits.length > 23) storedFractionBits = storedFractionBits.slice(0, (23 - storedFractionBits.length));
//     console.log(storedFractionBits.length);
//     // result += sign += exponet += exponetBits += storedFractionBits;
//     result += sign;
//     result += " ";
//     result += exponet;
//     result += " ";
//     // result += exponetBits 
//     // result += " ";
//     result += storedFractionBits;
//     console.log(exponetBits.length);
//     console.log(storedFractionBits.length);
//     // result += exponet 
//     // result += storedFractionBits;
//     console.log(result.length);
//     return result;


// }


// function numberAfterDecimal(dec) {
//     let bustedUpNumber = [];
//     let numberAfterDecimal = "";

//     bustedUpNumber = dec.toString().split(".");
//     numberAfterDecimal = "." + bustedUpNumber[1];
//     console.log(numberAfterDecimal);
//     return Number(numberAfterDecimal) || 0.00;

// }

// //this will just be a converter
// // function decimalToBinary(dec) {
// //     console.log((126 >>> 0).toString(2));
// //     return (dec >>> 0).toString(2);
// // }

// function decimalToBinary(nMask) {
//     // nMask must be between -2147483648 and 2147483647
//     console.log(nMask);
//     for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
//         nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
//     sMask = sMask.slice(24);
//     console.log(sMask);
//     return sMask;
// }



// // console.log(decimalToBinary(45));
// console.log(FloatToBinary(45.45));
//                                  // 0 10000100 01101011100110011001101
// console.log(FloatToBinary(-31.5));
//                                  // 1 10000011 11111000000000000000000
// console.log(FloatToBinary(12.375));
//                                   // 0 10000010 10001100000000000000000
// console.log(FloatToBinary(0.375));
//                                  // 0 01111101 10000000000000000000000
// console.log(FloatToBinary(0.15625));
//                                    // 0 01111100 01000000000000000000000
// console.log(FloatToBinary(0.003));
//                                  // 0 01110110 10001001001101110100110
// console.log(FloatToBinary(-125.007));
//                                     // 1 10000101 11110100000001110010110
// console.log(FloatToBinary(.0000000009));
//                                        // 0 01100000 11101110110001111011111



//======================================= UNCOMMENT AND MAINTAIN THE CODE BELOW ==================================\\
// actually, nevermind as there is a bug in the below code that i will have to fix, where we dont account for non decimal numbers
//its a simple-ish fix that will be fixed the in the submitted code, so ill just have to push it into the below code and remove this
// comment string 
// also, i need to remove the slice from the binary function and add a slice of exponet.slice(-8) where i get my exponents from
// I think those were the only two bugs that this current form has.  Non decimal number ( numbers ending in .0 ) and the slice

// //===========================================  REFACTORING  =============================================\\
// //TODO:  
// //       A strange thing to note is the strange rounding at the end, also there are no edge cases, so its not super robust
// //       maybe at some point i can look at that and decide if i want to study what those edge cases are and what not

// // I need to break apart the numbers before and after the decimal
// function FloatToBinary(dec) {
//     let sign = '0';
//     let exponet = 0;
//     let positiveExponet = '';
//     let mantissa = '';
//     let result = '';
//     let fractionBitsLength = 23;

//     // I need to check the sign of the decimal - remember the sign then turn dec into a positive number
//     if (dec < 0) sign = '1';
//     dec = Math.abs(dec);
//     // we want the fraction to be positive, so we set it after the abs
//     let fraction = dec;
//     console.log(dec);

//     console.log(Math.floor(dec));

//     //if its smaller than 0, count the zeros leading up to the first number and the exponet is number of zeros + 1

//     // console.log(dec.toString().split('.'));
//     // fraction = Number(dec.toString().split('.')[1]); this gets the number after the decimal as a whole number, sadly not needed despite it being cool

//     // I need to get the last 23 bits - multiply by 2 drop the number in the front and add it to the stack
//     console.log(fraction);
//     let leadingZeroFlag = 1;
//     let negativeExponet = 1;  //starts at 1 since we dont count the first non-zero number, but stop at the first non-zero number
//     let count = 0;

//     do {
//         //remove the number before the decimal since we are only looking at whats after the decimal
//         if (fraction >= 1) {
//             fraction = numberAfterDecimal(fraction);
//         }
//         fraction *= 2;
//         if (fraction >= 1) {
//             mantissa += '1';
//             leadingZeroFlag = 0;
//         } else {
//             mantissa += '0';
//         }
//         console.log(fraction);
//         // for the small numbers we need the negative exponet which is going to be counting until we hit the first non-zero
//         if(leadingZeroFlag) negativeExponet += 1;
//         count++;
//         //if there are 10 leading zeros, we still need to get 23 bits after those 10 zeros, we will chop this down to 23 later
//     } while (count < (fractionBitsLength + negativeExponet));


//     console.log(sign);
//     console.log(exponet);
//     console.log(positiveExponet);
//     console.log(mantissa);
//     if (Math.floor(dec) >= 1) {
//         positiveExponet = decimalToBinary(Math.floor(dec)).toString();
//         //remove the leading zeros
//         while (positiveExponet[0] === '0') {
//             positiveExponet = positiveExponet.slice(1);
//         }
//         console.log(positiveExponet);
//         exponet = positiveExponet.length - 1;
//         console.log(exponet);
//         exponet += 127;
//         console.log(exponet);
//         console.log(decimalToBinary(exponet).toString());
//         exponet = decimalToBinary(exponet).toString();
//         positiveExponet = positiveExponet.slice(1);  //chop off the first digit as its not needed after we get our exponet, we just need whats after the decimal which is everything after the first digit.
//         console.log(positiveExponet);
//     } else {
//         exponet = 127 - negativeExponet;
//         exponet = decimalToBinary(exponet).toString();
//         mantissa = mantissa.slice(negativeExponet);
//         console.log(mantissa.length);
//         console.log(negativeExponet);
//     }


//     mantissa = positiveExponet + mantissa;
//     console.log(mantissa.length);
//     if (mantissa.length > 23) mantissa = mantissa.slice(0, (23 - mantissa.length));
//     console.log(mantissa.length);
//     // result += sign += exponet += mantissa;
//     result += sign;
//     result += " ";
//     result += exponet;
//     result += " ";
//     // result += positiveExponet 
//     // result += " ";
//     result += mantissa;
//     console.log(positiveExponet.length);
//     console.log(mantissa.length);
//     // result += exponet 
//     // result += mantissa;
//     console.log(result.length);
//     return result;

// }


// function numberAfterDecimal(dec) {
//     let bustedUpNumber = [];
//     let numberAfterDecimal = "";

//     bustedUpNumber = dec.toString().split(".");
//     numberAfterDecimal = "." + bustedUpNumber[1];
//     console.log(numberAfterDecimal);
//     return Number(numberAfterDecimal) || 0.00;

// }


// function decimalToBinary(nMask) {
//     // nMask must be between -2147483648 and 2147483647
//     console.log(nMask);
//     for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
//         nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
//     sMask = sMask.slice(24);
//     console.log(sMask);
//     return sMask;
// }

//================================ END OF CURRENT CODE TO MAINTAIN =========================================\\





//============ ACTUAL SUBMITTED CODE WITH REMOVED LOGS AND COMMENTS, BUT IS THE SAME AS THE ABOVE COMMENTED OUT SECTION ============\\

//===========================================  REFACTORING  =============================================\\
//TODO:  
//       A strange thing to note is the strange rounding at the end, also there are no edge cases, so its not super robust
//       maybe at some point i can look at that and decide if i want to study what those edge cases are and what not


function FloatToBinary(dec) {
    let sign = '0';
    let exponet = 0;
    let positiveExponet = '';
    let mantissa = '';
    let result = '';
    let fractionBitsLength = 23;

    dec = Number(dec);
    if (dec < 0) sign = '1';
    dec = Math.abs(dec);
    let fraction = dec;
    let leadingZeroFlag = 1;
    let negativeExponet = 1;
    let count = 0;
    if (Math.floor(dec) - dec !== 0) {
        do {
            if (fraction >= 1) fraction = numberAfterDecimal(fraction);
            fraction *= 2;
            if (fraction >= 1) {
                mantissa += '1';
                leadingZeroFlag = 0;
            } else {
                mantissa += '0';
            }
            if (leadingZeroFlag) negativeExponet += 1;
            count++;
        } while (count < (fractionBitsLength + negativeExponet));
    }
    if (Math.floor(dec) >= 1) {
        positiveExponet = decimalToBinary(Math.floor(dec)).toString();
        while (positiveExponet[0] === '0') {
            positiveExponet = positiveExponet.slice(1);
        }
        exponet = positiveExponet.length - 1;
        exponet += 127;
        exponet = decimalToBinary(exponet).toString();
        exponet = exponet.slice(-8);
        positiveExponet = positiveExponet.slice(1);
    } else {
        exponet = 127 - negativeExponet;
        exponet = decimalToBinary(exponet).toString();
        exponet = exponet.slice(-8);
        mantissa = mantissa.slice(negativeExponet);
    }

    mantissa = positiveExponet + mantissa;
    if (mantissa.length > 23) mantissa = mantissa.slice(0, (fractionBitsLength - mantissa.length));
    if (mantissa.length < 23) mantissa = mantissa.padEnd(fractionBitsLength, '0');
    result += sign += exponet += mantissa;
    return result;
}

function numberAfterDecimal(dec) {
    let bustedUpNumber = [];
    let numberAfterDecimal = "";
    bustedUpNumber = dec.toString().split(".");
    numberAfterDecimal = "." + bustedUpNumber[1];
    return Number(numberAfterDecimal) || 0.00;
}

function decimalToBinary(nMask) {
    for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
        nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask;
}


// console.log(FloatToBinary("123.0"), "010000101111011000000000000XXXXX");
// console.log(FloatToBinary(123.0), "010000101111011000000000000XXXXX");
// console.log(FloatToBinary(-0.006), "101110111100010010011011101XXXXX");

console.log(FloatToBinary(-666.01));
//                                    110001000010011010000000101XXXXX
//                                    1 10001000 01001101000000010100100

console.log(FloatToBinary(12345678));
//                                     010010110011110001100001010XXXXX


// // console.log(decimalToBinary(45));
// console.log(FloatToBinary(45.45));
// // 01000010001101011100110011001101
// console.log(FloatToBinary(-31.5));
// // 1 10000011 11111000000000000000000
// console.log(FloatToBinary(12.375));
// // 0 10000010 10001100000000000000000
console.log(FloatToBinary(0.375));
                                 // 00111110110000000000000000000000
// console.log(FloatToBinary(0.15625));
// // 0 01111100 01000000000000000000000
// console.log(FloatToBinary(0.003));
// // 0 01110110 10001001001101110100110
// console.log(FloatToBinary(-125.007));
// // 1 10000101 11110100000001110010110
// console.log(FloatToBinary(.0000000009));
                                       // 0 01100000 11101110110001111011111



// console.log(FloatToBinary(.75));
// console.log(FloatToBinary(1));
// console.log(numberAfterDecimal(-45.65));
//  12.375       = 0 10000010 10001100000000000000000
//  0.375        = 0 01111101 10000000000000000000000
//  0.15625      = 00111110 00100000 00000000 00000000
//  45.45        = 01000010 00110101 11001100 11001101
// -31.5         = 11000001 11111100 00000000 00000000
//  0.003        = 00111011 01000100 10011011 10100110
// -125.007      = 11000010 11111010 00000011 10010110
//  0.0000000009 = 00110000 01110111 01100011 11011111