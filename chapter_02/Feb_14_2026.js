/** var,let and constant
 * var is a global scope
 * Function
 * var alows re-declaration and re-assignment
 * its very dynamically used and updates according to the latest update 
 * and also can be manupulated after assigning the value
 **/
//Example of var
var a = 10;
console.log(a);
function test() {
    var a = 20;
    if (true)
        console.log(a);
    var a = 30;
    console.log(a);
}
test();

let b = 10;
console.log(b);
function test1() {
    let b = 20;
    if (true)
        console.log(b);
    b = 30;
    console.log(b);
}
test1();

