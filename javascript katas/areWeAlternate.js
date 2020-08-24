// Create a function isAlt() that accepts a string as an argument and validates whether 
// the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true

// Arguments consist of only lowercase letters.


function isAlt(string) {
    let splitString = string.split('')
    let odd  = [];
    let even = [];
    for(let i = 0; i < splitString.length; i++) {
        if(i % 2 === 0) {
            console.log(i);
            even.push(splitString[i]);
        } else {
            odd.push(splitString[i]);
            console.log(i);
        }
    }
    even = even.join('').replace(/[aeiou]+/g, '');
    odd  = odd.join('').replace(/[aeiou]+/g, '');

    console.log(even);
    console.log(odd);
    console.log(splitString);
    return !even || !odd;
}


function isAlt(string) {
    let splitString = string.split('');
    let odd  = [];
    let even = [];
    for(let i = 0; i < splitString.length; i++) {
        i % 2 ? odd.push(splitString[i]) : even.push(splitString[i])
    }
    let evenVowels = even.join('').replace(/[aeiou]+/, '');
    let oddConsonants  = odd.join('').replace(/[^aeiou]+/, '');
    let evenConsonants = even.join('').replace(/[^aeiou]+/, '');
    let oddVowels  = odd.join('').replace(/[aeiou]+/, '');
    return (evenVowels === "" && oddConsonants === "") || (evenConsonants === "" && oddVowels === "");
    // if(evenVowels === "" && oddConsonants === "") {
    //     return true;
    // } else if(evenConsonants === "" && oddVowels === "") {
    //     return true;
    // } else {
    //     return false;
    // }
}

//actual submitted code, its pretty funny really as its hard to read
function isAlt(string) {
    let splitString = string.split('');
    let odd  = [], even = [];
    for(let i = 0; i < splitString.length; i++)
        i % 2 ? odd.push(splitString[i]) : even.push(splitString[i])
    return (even.join('').replace(/[aeiou]+/, '') === "" && odd.join('').replace(/[^aeiou]+/, '') === "") || (even.join('').replace(/[^aeiou]+/, '') === "" && odd.join('').replace(/[aeiou]+/, '') === "");
}


console.log(isAlt("amazon"))// true
console.log(isAlt("apple"))// false
console.log(isAlt("banana"))// true
console.log(isAlt("firecracker"))//false
console.log(isAlt("jimiai"))//false
console.log(isAlt("iaebe"))//false
console.log(isAlt("aaaai"));
console.log(isAlt("daeaf"));
console.log(isAlt("feaie"));

