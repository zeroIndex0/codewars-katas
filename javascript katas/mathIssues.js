//Math Issues
// https://www.codewars.com/kata/math-issues/train/javascript

/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? 
We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider 
things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()

*/

Math.round = function(number) {
    // let val = number % 1;
    // if(val > 0.4999999) {
    //     return (number - number % 1 ) + 1;
    // }
    // return number - val;

    return number % 1 > 0.4999999 ? (number - number % 1) + 1 : number - number % 1;
  };
  
Math.ceil = function(number) {
    if(number - number % 1 === number) return number;
    return (number - number % 1 ) + 1;
};
  
Math.floor = function(number) {
    return number - number % 1;
};


//=========================== acutal submitted code ===============================\\
Math.round = function(number) {
    return number % 1 > 0.4999999 ? (number - number % 1) + 1 : number - number % 1;
};
  
Math.ceil = function(number) {
    return number - number % 1 === number ? number : (number - number % 1) + 1;
};
  
Math.floor = function(number) {
    return number - number % 1;
};


  console.log((Math.round(2.4)));//2
  console.log((Math.round(0.4)));//0
  console.log((Math.round(0.5)));//1
  console.log((Math.ceil(0.4)));//1
  console.log((Math.ceil(0.5)));//1
  console.log((Math.ceil(5)));//5
  console.log((Math.ceil(6)));//6
  console.log((Math.ceil(0)));//0
  console.log((Math.floor(0.4)));//0 
  console.log((Math.floor(0.5)));//0


