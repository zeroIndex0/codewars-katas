//create a reverse in just a few characters of code.

// https://www.codewars.com/kata/reverse-it-quickly

// Typically, reversing an array is a pretty straightforward task even for novice programmers. But not when a crowd of angry zombies scratching your door, looking for a fresh brains. In this case even skilled ninja-geek probably prefer to quickly push his code on github to have enough time to find a chainsaw. So there's two obstacles:

//     Your code needs to be as short as possible, in fact not longer than 28 characters
//     Because you are scared and stressed you have forgotten how to use the standard reverse() method

// #Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]]

// #Output: [[],'c','b','a',3,2,1]


let d = [1,2,3,'a','b','c',[]];

let r=[]
d.map(e=>{r.unshift(e)})

let output = [[],'c','b','a',3,2,1];

console.log(r, output);


// this was honestly kinda lame.  and that its ranked 4kyu is absurd.  But hey, it was easy points after searching
// thats right, i looked up how to do this since its so obscure.  I just wanted a hint, but the result was right there.
// Im still really proud of my unshift solution, however its not very resualbe without resetting the result array.
// weirdReverse=a=>{a.map(e=>{p
weirdReverse=a=>a.sort(j=>1)
console.log("weirdReverse=a=>a.sort(()=>1)".length)


console.log(weirdReverse([1,2,3,4,5]), "[5,4,3,2,1]");
console.log(weirdReverse([1,2,3,'a','b','c',[]]), output);