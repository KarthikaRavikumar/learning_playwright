function outer() {
    let message = 'Hello';
    console.log('Outer Called');

    function inner() {
        console.log(message);
    }
    return inner;
}

const myFunc = outer();
myFunc();
