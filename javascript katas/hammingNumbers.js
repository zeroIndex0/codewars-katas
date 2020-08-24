// Hamming numbers for codewars kata
// https://www.codewars.com/kata/526d84b98f428f14a60008da/javascript

/*
A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

    The first smallest Hamming number is 1 = 203050
    The second smallest Hamming number is 2 = 213050
    The third smallest Hamming number is 3 = 203150
    The fourth smallest Hamming number is 4 = 223050
    The fifth smallest Hamming number is 5 = 203051

The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.
*/


// I need three variables that are needed for the multiples of 2, 3, and 5
// and then i need to increment those numbers

// I need to get the min value of the 2, 3, and 5 and then increment the value by one that im multiplying it to
// and if there are two numbers that are both the min, then i need to increment both of those.
// I think we can just call them i current, cause why not

function hamming(num) {
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    let twoMultiplier = 2;
    let threeMultiplier = 3;
    let fiveMultiplier = 5;
    let result = [];
    let currentNumber = 1;

    result[0] = 1;
    for (let i = 1; i < num; i++) {
        currentNumber = Math.min(twoMultiplier, threeMultiplier, fiveMultiplier);
        result[i] = currentNumber;

        if (currentNumber === twoMultiplier) {
            i2++;
            twoMultiplier = result[i2] * 2;
        }
        if (currentNumber === threeMultiplier) {
            i3++;
            threeMultiplier = result[i3] * 3;
        }
        if (currentNumber === fiveMultiplier) {
            i5++;
            fiveMultiplier = result[i5] * 5;
        }
    }
    return result[result.length - 1];
}

console.log(hamming(0), 1);
console.log(hamming(8), 9);

console.log(hamming(1692), 2147483648)



// hamming(8) should be 9 .... i think

// hamming(1692) should be 2147483648 expected:<2147483648>