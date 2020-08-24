// Codewars' Kata: Multiplication Tables

// https://www.codewars.com/kata/5432fd1c913a65b28f000342
/*
Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a 
multiplication table sized according to the given dimensions. **The return value of the function 
must be an array, and the numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying the number in its first row 
times the number in its first column.

*/

function multiplicationTable(row,col) {
    let table = [];
    for(let i = 1; i <= row; i++) {
        table[i-1] = [];
        console.log(table);
        for(let j = 1; j <= col; j++) {
            console.log(i);
            console.log(j);
            console.log(i * j);
            console.log(table);
            table[i-1][j-1] = j * i;
        }
    }
    console.log(table.slice(col));
    console.log(table);
    return table;
}


//submitted code
function multiplicationTable(row,col) {
    let table = [];
    for(let i = 1; i <= row; i++) {
        table[i-1] = [];
        for(let j = 1; j <= col; j++) {
            table[i-1][j-1] = j * i;
        }
    }
    return table;
}

console.log(multiplicationTable(3, 3));//[1,2,3][2,4,6][3,6,9]


