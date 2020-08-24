//Permutations
//https://www.codewars.com/kata/permutations 

/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. 
This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/



//starting from the end of the string take the last character
//move that character to each spot in the string decrementing by one position

//if its not a dupe, then push the string into a new array

//move down one position in the string and do it again ( recursive would prob be okay )

//handle duplications - could maybe use the cache trick from cj to remove dupes


// function permutations(string) {
//     result = [];
//     const cache = {};
//     console.log(string.length);
//     if(string.length <= 1) {
//         return string.split('');
//     }
//     let currentIndex = string.length - 1;
//     // console.log(currentIndex);
//     // // let firstHalf = string.substr(0, currentIndex);
//     // // let secondHalf = string.substr(currentIndex + 1, string.length -1);
//     // // console.log(firstHalf);
//     // // console.log(secondHalf);
//     // let letter = string[currentIndex];
//     // let newString = string.substr(0, string.length -1);
//     // let count = string.length - 1;
//     // while(count >= 0) {
//     //     console.log(count);
//     //     // let letter = string[currentIndex];
//     //     // string = string.substr(0, string.length -1);
//     //     console.log(string);
//     //     console.log(currentIndex);
//     //     let firstHalf = newString.substr(0, count);
//     //     let secondHalf = newString.substr(count, newString.length);
//     //     console.log(firstHalf);
//     //     console.log(secondHalf);
//     //     let fullWord = firstHalf + letter + secondHalf;
//     //     console.log(fullWord);
//     //     console.log(letter);
//     //     result.push(fullWord);
//     //     count -= 1;
//     // }

//     // while(currentIndex >= 0) {
//         // permutations(string);
//         // currentIndex -= 1;
//     // }


//     function swapAround(string, num) {
//         let currentIndex = num;
//         console.log(currentIndex);
//         console.log(string);
//         let letter = string[currentIndex];
//         let newString1 = string.substr(0, num);
//         let newString2 = string.substr(num+1, string.length -1);
//         let newString = newString1 + newString2
//         console.log(newString1);
//         console.log(newString2);
//         console.log(newString);
//         console.log(letter);
//         let count = string.length - 1;
//         while(count >= 0) {
//             console.log(count);
//             // let letter = string[currentIndex];
//             // string = string.substr(0, string.length -1);
//             console.log(string);
//             console.log(currentIndex);
//             let firstHalf = newString.substr(0, count);
//             let secondHalf = newString.substr(count, newString.length);
//             console.log(firstHalf);
//             console.log(secondHalf);
//             let fullWord = firstHalf + letter + secondHalf;
//             console.log(fullWord);
//             console.log(letter);
//             if(!cache[fullWord]) {
//                 result.push(fullWord);
//                 cache[fullWord] = true;
//             }
//             count -= 1;
//         }
//     }



//     while(currentIndex >= 0) {
//         console.log(currentIndex);
//         let otherString1 = string.substr(0, currentIndex+1);
//         let otherString2 = string.substr(currentIndex+1, string.length);
//         console.log(otherString1);
//         console.log(otherString2);
//         let otherString = otherString2 + otherString1;
//         console.log(otherString, currentIndex);
//         swapAround(otherString, currentIndex);
//         // swapAround('bca', currentIndex);
//         currentIndex -= 1;
//     }

//     return result;
// }



//start over-ish... again
function permutations(string) {
    result = [];
    const cache = {};
    console.log(string.length);
    if (string.length <= 1) {
        return string.split('');
    }
    let currentIndex = string.length - 1;
    // console.log(currentIndex);
    // // let firstHalf = string.substr(0, currentIndex);
    // // let secondHalf = string.substr(currentIndex + 1, string.length -1);
    // // console.log(firstHalf);
    // // console.log(secondHalf);
    // let letter = string[currentIndex];
    // let newString = string.substr(0, string.length -1);
    // let count = string.length - 1;
    // while(count >= 0) {
    //     console.log(count);
    //     // let letter = string[currentIndex];
    //     // string = string.substr(0, string.length -1);
    //     console.log(string);
    //     console.log(currentIndex);
    //     let firstHalf = newString.substr(0, count);
    //     let secondHalf = newString.substr(count, newString.length);
    //     console.log(firstHalf);
    //     console.log(secondHalf);
    //     let fullWord = firstHalf + letter + secondHalf;
    //     console.log(fullWord);
    //     console.log(letter);
    //     result.push(fullWord);
    //     count -= 1;
    // }

    // while(currentIndex >= 0) {
    // permutations(string);
    // currentIndex -= 1;
    // }


    function swapAround(string) {
        let currentIndex = string.length - 1;
        while (currentIndex >= 0) {
            console.log(currentIndex);
            console.log(string);
            let letter = string[currentIndex];
            // let newString1 = string.substr(0, num);
            // let newString2 = string.substr(num+1, string.length -1);
            // let newString = newString1 + newString2
            // console.log(newString1);
            // console.log(newString2);
            // console.log(newString);
            console.log(string);
            console.log(letter);
            let count = string.length - 1;
            while (count >= 0) {
                console.log(count);
                // let letter = string[currentIndex];
                // string = string.substr(0, string.length -1);
                console.log(string);
                console.log(currentIndex);
                let firstHalf = string.substr(0, count);
                console.log(string.length - 1);
                let secondHalf = string.substr(count, string.length);
                console.log(firstHalf);
                console.log(secondHalf);
                let fullWord = firstHalf + letter + secondHalf;
                fullWord = fullWord.substr(0, string.length);
                console.log(fullWord);
                console.log(letter);
                if (!cache[fullWord]) {
                    result.push(fullWord);
                    cache[fullWord] = true;
                }
                // console.log(result);
                // console.log(cache)
                count -= 1;
            }
            currentIndex -= 1;
        }
    }



    while (currentIndex >= 0) {
        console.log(currentIndex);
        let otherString1 = string.substr(0, currentIndex + 1);
        let otherString2 = string.substr(currentIndex + 1, string.length);
        console.log(otherString1);
        console.log(otherString2);
        let otherString = otherString2 + otherString1;
        console.log(otherString, currentIndex);
        // swapAround(otherString);
        currentIndex = 1;
        swapAround('bca');
        currentIndex = 0;
        currentIndex -= 1;
    }

    return result;
}

//Everything is garbage so far, i need to swap the word into its combos and then check on
// those swapped words.  so move last index to the front and check that word
// and so on until ive moved all indexes.  I think.


//=================== Submitted Code ======================\\

//What I did was take the last letter and move it left one space until it reached the first
//After each move, I check the cache object to see if my current pattern exists already in cache
//If it exists, I ignore it.  If it doesn't exist I push it into my result array, as its new.
//Then I push the new string created into the cache object and repeat until I run down the whole
//string.  Then, I repeat until I run down the whole set of letters.

function permutations(string) {
    result = [];
    const cache = {};
    console.log(string.length);
    if (string.length <= 1) {
        return string.split('');
    }
    let currentIndex = string.length - 1;

    function swapAround(string) {
        let currentIndex = string.length - 1;
        while (currentIndex >= 0) {
            let letter = string[currentIndex];
            //cut out the current letter
            string = string.substr(0, currentIndex) + string.substr(currentIndex + 1, string.length);
            //add that letter to the end
            string = string + letter;
            let count = string.length - 1;
            while (count >= 0) {
                //keep shifting the current letter one space to the left
                let firstHalf = string.substr(0, count);
                let secondHalf = string.substr(count, string.length);
                let fullWord = firstHalf + letter + secondHalf;
                //fullWord in the instance above still has the letter we moved, which is in
                //the second half and always the last letter and no longer needed, since its moved.
                //Therefore, the line below cuts that last letter off
                fullWord = fullWord.substr(0, string.length);
                if (!cache[fullWord]) {
                    result.push(fullWord);
                    cache[fullWord] = true;
                }
                count -= 1;
            }
            currentIndex -= 1;
        }
    }

    while (currentIndex >= 0) {
        let otherString1 = string.substr(0, currentIndex + 1);
        let otherString2 = string.substr(currentIndex + 1, string.length);
        let otherString = otherString2 + otherString1;
        swapAround(otherString);
        currentIndex -= 1;
    }
    return result;
}

//TEST CASES:
// console.log(permutations(''));
// console.log((permutations('a'), ['a']));
// console.log((permutations('ab').sort()));// ['ab', 'ba'].sort()));
// console.log((permutations('aabb').sort()));
//, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()));
console.log((permutations('abc')));
//Expected: '['abc', 'acb', 'bac', 'bca', 'cab', 'cba']', 
//inst got: '['abc', 'acb',        'bca', 'cab', 'cba']'
// console.log((permutations('abcd')));
//missing 10, clearly this is not correct or really even close.
//Expected: '['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba']'
//inst got: '['abcd', 'abdc',                 'adbc',         'bcda', 'bdac',                                 'cabd', 'cadb', 'cbda',         'cdab', 'cdba', 'dabc', 'dacb', 'dbac',         'dcab',       ]'