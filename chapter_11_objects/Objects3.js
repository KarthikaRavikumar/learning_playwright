const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this;
    },
    substract(n) {
        this.value -= n;
        return this;
    }

}

console.log(calculator.add(5).substract(5));
// { value: 0, add: [Function: add], substract: [Function: substract] }