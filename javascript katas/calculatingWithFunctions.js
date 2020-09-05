/*
    Calculating with functions
    https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

    This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Divison should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));

*/

// ================ Submitted Code ================== \\
function zero(value) {
    return value ? Math.floor(eval(0 + value)) : 0;
}

function one(value) {
    return value ? Math.floor(eval(1 + value)) : 1;
}

function two(value) {
    return value ? Math.floor(eval(2 + value)) : 2;
}

function three(value) {
    return value ? Math.floor(eval(3 + value)) : 3;
}

function four(value) {
    return value ? Math.floor(eval(4 + value)) : 4;
}

function five(value) {
    return value ? Math.floor(eval(5 + value)) : 5;
}

function six(value) {
    return value ? Math.floor(eval(6 + value)) : 6;
}

function seven(value) {
    return value ? Math.floor(eval(7 + value)) : 7;
}

function eight(value) {
    return value ? Math.floor(eval(8 + value)) : 8;
}

function nine(value) {
    return value ? Math.floor(eval(9 + value)) : 9;
}

function plus(value) {
    return '+' + value;
}

function minus(value) {
    return '-' + value;
}

function times(value) {
    return '*' + value;
}

function dividedBy(value) {
    return '/' + value;
}

console.log(seven(plus(five())));
console.log(five(plus(seven())));
console.log(seven(plus(three())));
console.log(five(times(five())));
console.log(plus(eight()));
console.log(four(dividedBy(zero())));
console.log(six(dividedBy(four())))
console.log(eight(dividedBy(three())));

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);



/*I thought this one was easy because I knew what i had to do when i read the problem.  Now, looking at other people's solutions
    shows that there are some ways to tackle this problem that I have to read into.
 Examples of their solutions:
    function five(operator) {
       return operator ? operator(5) : 5;
    }

    function six(operator) {
        return operator ? operator(6) : 6;
    }
    function plus(rightVal) {
        return function(leftVal) {
            return leftVal + rightVal;
        }
    }

    What exactaly is the operator(5)?  the passed in value could be numbers 0-9 so it could be something like 8(5)
        and that makes no sense to me.  If the operator doesn't exist then here take 8(5)... If you console log that
        you get nothing.
    Then there is the second return function, which i understand, but what i dont understand is how it obtains the left value
        from being a nested function.  How does it step outside itself to grab the value of the function before it.
        I guess my biggest question here is what is actually being passed into the second function thats labeled 'leftVal'.
        It would have to be the function that 'plus' is passed into, but how does it overstep that function... wait...
        is that passed ito as operator... okay.... I think i get it, but its still a little fuzzy...
    These are valid solutions, they work, but i cannot figure out how they work by reading them and it will be nearly
        impossible to google these types of questions because i dont know the exact words to search.

    Alright, typing some of the issues out, makes me think i understand a little more.  operator(5) is in fact the second
        return function so its actually not 8(5) and its 'return 8 + 5'.  It's strange though since it's returning 
        an entire function as its return value.  It's not easy to pick up on with the first glance and its still a little
        confusing to think about.  Interesting though none the less.

*/