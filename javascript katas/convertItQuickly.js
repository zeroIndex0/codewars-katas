// Convert it, quickly!
// https://www.codewars.com/kata/convert-it-quickly/train/javascript

// #Input: string containing a single positive valid hex number without # symbol. Ex: 'FF'.

// #Output: converted decimal number, 255

// #Restriction: code length <= 26 characters

// #Trivia: you have time to type only 26 characters before the daily angry zombie mob will break into your house.

// If you successfully fought back try to move to the next level


//cant belive i found it, ffs, this one actually works.  LOL
// I found this one on my own, tyvm
weirdHexToDec=x=>+("0x"+x);
console.log("weirdHexToDec=x=>+('0x'+x)".length);

console.log("weirdHexToDec=x=>Number(x)".length);
console.log("weirdHexToDec=x=>parseInt(x,16)".length);
console.log("weirdHexToDec=x=>".length);
console.log("parseInt(x,16)".length);
console.log("parseI".length);


console.log(weirdHexToDec('FF'));
console.log(weirdHexToDec('babe'));
console.log(weirdHexToDec(255));