// n = 3
// *
// * *
// * * *

let n = 3;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        //row = row + "* ";
        row += "* ";
    }
    console.log(row.trim());
}

//creating a 2D array
let rows = 3, cols = 4;
let grid = [];
let digit = 0;

for (let i = 0; i < rows; i++) {
    grid[i] = [];                    // create inner array
    for (let j = 0; j < cols; j++) {
        grid[i][j] = digit;
        digit++;           // fill with 0
    }
}
console.log(grid);

//creating a 2D array with predefined values
let row= 3,column =4;
let mygrid = [
    ["Karthika","Sunitha","Sangeetha","Vijay"],
    ["Karthi","Sunil","Sangeeth","Vijay"],
    ["Karthi","Sunil","Sangeeth","Vijay"]
];
let new_grid = [];
for (let i = 0; i < mygrid.length; i++){
    new_grid[i] = [];
    for (let j = 0; j < mygrid[i].length; j++){
        new_grid[i][j] = mygrid[i][j].toUpperCase();
    }
    
}
console.log(new_grid);