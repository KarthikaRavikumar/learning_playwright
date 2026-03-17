// What is the output?

function outer() {
    let x = 10;
    function inner() {
        let x = 20;
        return x;
    }
    return x + inner();
}
console.log(outer());

//answer -> 30