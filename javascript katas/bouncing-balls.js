// bouncing balls kata

function bouncingBall(h, bounce, window) {
    if( h <= 0 || bounce >= 1 || bounce < 0 || window >= h) {
        return -1;
    }
    //formula n = log[base of bounce](window / height);
    //simple when you have a formula
    let countPasses = Math.floor(Math.log(window / h) / Math.log(bounce)) * 2 + 1;
    return countPasses;
}

console.log(bouncingBall(0, 0, 0));
console.log(bouncingBall(5, 1, 2));
console.log(bouncingBall(5, -1, 2));
console.log(bouncingBall(5, 0.55, 6));
console.log(bouncingBall(3, .66, 1.5));
console.log(bouncingBall(30, .66, 1.5));
console.log(bouncingBall(30, .9999999999, 1));
// 34011973815