/*
*********

 *******

  *****

   ***

    *
*/

let spaceCount = 0;

for (let i = 9; i >= 1; i -= 2) {
    let row = "";

    // add spaces
    for (let s = 0; s < spaceCount; s++) {
        row += " ";
    }

    // add stars
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
    spaceCount++; // increase spaces each row
}