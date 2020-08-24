//Kata vector-class 5kyu
//
//problem is this is an object and not a class, i wonder what the line is in js
//but i was confused, so im really glad that i did this kata

//WOW eval() solves code from strings.  damn, what a piece of work that code is
//ill probably never find this link in this file again, but here we go.  hopefully typing it up will help me remember that this function exists
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

//map would also have helped out a lot in this kata, but the problem is that i couldnt use foreach, so it was messing me up
//since i guess foreach is only for an array and for some reason the array i passed in was turning into an object
//but yeah, i should have tried map
//f*#$!!! THE ONLY REASON FOREACH WASNT WORKING WAS BECAUSE I NEEDED TWO SETS OF () F*$#!!!!!!!!!!! Im so annoyed at myself
// components.forEach((e, i) => { }) and i was only using one set... i think, i dont know, but i know it wasnt working before. maybe its quokka
//and i rely on that extension a lot. that sucks becuase my code would have looked more like js fancy i know what im doing stuff
//and instead it looks like a chump that doesnt know all of the tricks amatuer type of ahole.  gg me gg no re me

// var a = new Vector([1, 2, 3]);
// var b = new Vector([3, 4, 5]);
// var c = new Vector([5, 6, 7, 8]);

// a.add(b);      // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
// a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error


var Vector = function (components) {
  console.log(components);

  this.data = components;

  console.log(this.data.length);

  this.toString = () => {
    let stringed = '(';
    for (let i = 0; i < this.data.length; i++) {
      stringed += this.data[i].toString();
      if(i !== this.data.length - 1) {
        stringed += ","
      }
    }
    stringed += ')'
    return stringed;
  }

  this.norm = () => {
    let result = 0;
    for (let i = 0; i < this.data.length; i++) {
      result += Math.pow(this.data[i], 2);
    }
    return Math.sqrt(result);
  }

  this.equals = (vec) => {
    if (this.data.length !== vec.data.length) {
      return false;
    } else {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] !== vec.data[i]) {
          return false;
        }
      }
    }
    return true;
  }


  this.add = (vec) => {
    if (this.data.length !== vec.data.length) {
      throw new Error("Error: Size Mismatch");
    } else {
      let newVector = [];
      for (let i = 0; i < this.data.length; i++) {
        newVector[i] = this.data[i] + vec.data[i];
      }
      return new Vector(newVector)
    }
  }

  this.subtract = (vec) => {
    if (this.data.length !== vec.data.length) {
      throw new Error("Error: Size Mismatch");
    } else {
      let newVector = [];
      for (let i = 0; i < this.data.length; i++) {
        newVector[i] = this.data[i] - vec.data[i];
      }
      return new Vector(newVector)
    }
  }

  this.dot = (vec) => {
    if (this.data.length !== vec.data.length) {
      throw new Error("Error: Size Mismatch");
    } else {
      let result = 0;
      for (let i = 0; i < this.data.length; i++) {
        result += this.data[i] * vec.data[i];
        console.log(this.data[i] * vec.data[i]);
        console.log(result);
      }
      return result;
    }
  }

};


// let a = new Vector([1, 2]);
// let b = new Vector([3, 4]);

// console.log(a.add(b).equals(new Vector([4,6])));


// console.log(a);
// console.log(a.data);
// console.log(a.add(b));

// console.log(b);
// console.log(b.data);
// console.log(b.add(a));

// console.log(a.toString());




//Submitted code... can't wait to see all the one liners in the solution pages....

var Vector = function (components) {
  this.data = components;

  this.toString = () => {
    let stringed = '(';
    for (let i = 0; i < this.data.length; i++) {
      stringed += this.data[i].toString();
      if(i !== this.data.length - 1) {
        stringed += ","
      }
    }
    stringed += ')'
    return stringed;
  }

  this.norm = () => {
    let result = 0;
    for (let i = 0; i < this.data.length; i++) {
      result += Math.pow(this.data[i], 2);
    }
    return Math.sqrt(result);
  }

  this.equals = (vec) => {
    if (this.data.length !== vec.data.length) {
      return false;
    } else {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] !== vec.data[i]) {
          return false;
        }
      }
    }
    return true;
  }

  this.add = (vec) => {
    if (this.data.length !== vec.data.length) {
      throw new Error("Error: Size Mismatch");
    } else {
      let newVector = [];
      for (let i = 0; i < this.data.length; i++) {
        newVector[i] = this.data[i] + vec.data[i];
      }
      return new Vector(newVector)
    }
  }

  this.subtract = (vec) => {
    if (this.data.length !== vec.data.length) {
      throw new Error("Error: Size Mismatch");
    } else {
      let newVector = [];
      for (let i = 0; i < this.data.length; i++) {
        newVector[i] = this.data[i] - vec.data[i];
      }
      return new Vector(newVector)
    }
  }

  this.dot = (vec) => {
    if (this.data.length !== vec.data.length) {
      throw new Error("Error: Size Mismatch");
    } else {
      let result = 0;
      for (let i = 0; i < this.data.length; i++) {
        result += this.data[i] * vec.data[i];
      }
      return result;
    }
  }

};


var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c));      // throws an error