/*
Sudoku Solution Validator
https://www.codewars.com/kata/529bf0e9bdf7657179000008

Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)
Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false


========== Thoughts ==========
I can add up the rows and columns individually and check if their value adds up to 1+2+...+9
I will have to check to made sure there are no zeros since one zero and a 3 will add the same
  as 1, 2.  This could give a false positive.
Maybe ill check zeros first, or is there a way to check for zeros and add at the same time
  thats probably a better option.

*/

// =================== Submitted Code ======================= \\
function validSolution(board) {
    if (!board) return false;
    let boardSize = 9;
    let subgridSize = 3;
    let sum = 45; // add 1 through 9 inclusively to get 45
    let checkDupes = [];
    //Check rows
    for (let i = 0; i < boardSize; i++) {
        let rowTotal = 0;
        //check for duplicate row numbers
        if (board[i].length !== new Set(board[i]).size) return false;
        for (let j = 0; j < boardSize; j++) {
            if (board[i][j] === 0) return false;
            rowTotal += board[i][j];
        }
        if (rowTotal !== sum) return false;
    }
    //Check columns
    let count = 0;
    while (count < boardSize) {
        let columnTotal = 0;
        for (let i = 0; i < boardSize; i++) {
            columnTotal += board[i][count];
            checkDupes.push(board[i][count]);
        }
        //check for duplicate column numbers
        if (checkDupes.length !== new Set(checkDupes).size) return false;
        if (columnTotal !== sum) return false;
        checkDupes = [];
        count++;
    }
    //Check subgrids ( 3 x 3 squares )
    for (let i = 0; i < boardSize; i += subgridSize) {
        for (let j = 0; j < boardSize; j += subgridSize) {
            let result = subgrids(i, j, subgridSize);
            if (result !== sum) return false;
        }
    }

    function subgrids(givenI, givenJ, chunkSize) {
        let subgridTotal = 0;
        for (let i = 0; i < chunkSize; i++) {
            for (let j = 0; j < chunkSize; j++) {
                subgridTotal += board[givenI + i][givenJ + j];
            }
        }
        return subgridTotal;
    }
    return true;
}


//This is getting to be a bit too much.  The idea was to iterate over 3x3 chunks
//it started off fine, but then i needed to create a ton of check flags depending on
//what chunk i was working on and i feel i can remove all of those checks by
//adding a function that passes in the i and j position on the board and have it be much cleaner.
//I started off trying to do this to eliminate excess for loops and functions, but look where
//that led me.  A lot of flags and strange addition seems worse than another function
// and a couple extra for loops.  It's going to be much more readable. 
//
//Check subgrids ( 3 x 3 squares)
// let secondSet = false;
// let thirdset = false;
// let firstPass = true;
// for (let i = 0; i < boardSize; i += 3) {
//     const subgridSize = 9
//     let subgridCount = 0;
//     let subgridTotal = 0;
//     let subgridI = i;
//     let subgridJ = 0;
//     let subgridI_SecondSet = i + 3;
//     let subgridJ_SecondSet = 3;
//     let subgridI_ThirdSet = i + 6;
//     let subgridJ_ThirdSet = 6;
//     let firstSet = true;
//     while (subgridCount < subgridSize) {
//         console.log(subgridCount);
//         console.log(subgridCount % 3);
//         if (subgridCount % 3 === 0 && !firstPass && firstSet) {
//             console.log(i);
//             subgridI = 0;
//             subgridJ++;
//         }
//         if (subgridCount % 3 === 0 && !firstPass && secondSet) {
//             console.log(i);
//             subgridI_SecondSet = i + 3;
//             console.log(subgridJ_SecondSet);
//             subgridJ_SecondSet++;
//         }
//         if (subgridCount % 3 === 0 && !firstPass && thirdset) {
//             subgridI_ThirdSet = 6;
//             subgridJ_ThirdSet++;
//         }
//         if (firstSet) {
//             subgridTotal += board[subgridI][subgridJ];
//         } else if (secondSet) {
//             subgridTotal += board[subgridI_SecondSet][subgridJ_SecondSet];
//         } else {
//             subgridTotal += board[subgridI_ThirdSet][subgridJ_ThirdSet];
//         }
//         subgridI++;
//         subgridCount++;
//     }
//     firstPass = false;
//     if (firstSet) {
//         firstSet = !firstSet;
//         secondSet = !secondSet;
//     } else if (secondSet) {
//         secondSet = !secondSet;
//         thirdset = !thirdset;
//     } else {
//         thirdset = !thirdset;
//         firstSet = !firstSet;
//     }
//     console.log(subgridTotal);
//     // if (subgridTotal !== sum) return false;
// }


//found this test later to check for duplicates as it wasnt part of the kata.
//turns out there was no need to check for dupes to begin with
console.log(validSolution([
    [4, 3, 4, 6, 7, 8, 9, 1, 3],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [2, 9, 8, 3, 4, 2, 5, 6, 6],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]), "expected: false");


console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]), "expected: true");

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]), "expected: false");

console.log(validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
]), "expected: false");

// console.log(validSolution([
//     [1, 2, 3],
//     [1, 3, 2],
//     [3, 1, 2]
// ]))

console.log(validSolution([
    [1, 2, 6, 3, 4, 7, 5, 9, 8],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 7, 5, 8, 6, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [7, 5, 9, 1, 6, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [1, 4, 8, 7, 5, 9, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 1, 8, 5, 4]
]), "expected: false");

console.log(validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
]), "expected: false");