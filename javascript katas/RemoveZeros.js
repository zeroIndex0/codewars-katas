// Remove Zeros
//  bit of a misleading name for the kata if you ask me.  just shifting zeros, not removing them

// https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript

/*

Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

*/

let testArray = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

let t = [1, 0, 3, 2, 0, 4];

// let movedZero = false;

// do {
// movedZero = false;
// t.forEach( (v, i) =>  {
//     console.log(t.length);
//     console.log(t[i], v, i);
//     if(i+1 < t.length) {
//         if(t[i] === 0 || t[i] === '0') {
//             if(t[i+1] != 0 || t[i+1] != '0') {
//                 let temp = t[i];
//                 t[i] = t[i+1];
//                 t[i+1] = temp;
//                 movedZero = true;
//             }
//         }
//     }
//     console.log(t)

//     if(i+1 >= t.length) {
//         //this is the end of the array
//     }
// });

// } while (movedZero);


//================= Submitted Code =======================\\

function removeZeros(arr) {
    //check if a zero is on the left
    //if a zero is to the right swap left and right and flag that a zero was moved
    //if they are both zeros, do nothing and move on to the next
    //if its the last item in the array, do nothing
    //start over again and clear the zero was moved flag

    let movedZero = false;

    do {
        movedZero = false;
        for (let i = 0; i < arr.length; i++) {
            if (i + 1 < arr.length) {
                if (arr[i] === 0 || arr[i] === '0') {
                    console.log(arr[i + 1])
                    console.log(typeof (arr[i + 1]))
                    //weird issue with false being zero and not zero, so i put a check in specifically for booleans
                    if (arr[i + 1] != 0 || arr[i + 1] != '0' || typeof (arr[i + 1]) === 'boolean') {
                        let temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                        movedZero = true;
                    }
                }
            }
        }
    } while (movedZero);
    return arr;
}

// console.log(typeof(false))
// console.log(typeof(false.toString()))

if (false !== 0 || false !== '0') {
    console.log('yes');
} else {
    console.log('no go');
}

console.log(removeZeros([0, false]));
console.log(removeZeros([1, null, '5', '0', '2', 0, 8, 6, null, false]));
console.log(removeZeros([1, '0', 2, 0, 52, '0', 7, 0, '3', 1]))

// console.log('[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]');
// console.log(removeZeros(testArray));
// console.log(removeZeros([0,1,2,0,3]));
// console.log(removeZeros([2,3,0,5,6]));
// console.log(removeZeros([2,3,0,0,1,false]));