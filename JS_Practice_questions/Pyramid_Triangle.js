/*
    *
   ***
  *****
 *******
*********
*/

let totalRows = 5;

for (let i = 1; i <= totalRows; i++) {
    let row = "";

    // add spaces (decreasing)
    for (let s = 0; s < totalRows - i; s++) {
        row += " ";
    }

    // add stars (increasing by 2)
    for (let st = 0; st < (2 * i - 1); st++) {
        row += "*";
    }

    console.log(row);
}

let grid = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
    [26,27,28,29,30]
]
console.log(grid.length);