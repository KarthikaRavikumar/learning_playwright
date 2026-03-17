//What is the output?

function makeCounter() {
    let count = 0;
    return () => ++count; //count = 1
}
let counter = makeCounter();
counter(); //counter = 1
counter(); //counter = 2
console.log(counter()); //counter = 3

// c) 3