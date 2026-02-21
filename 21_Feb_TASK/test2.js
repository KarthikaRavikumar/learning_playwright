// FizzBuzz: Print numbers 1-100
// - Multiples of 3   → "Fizz"
// - Multiples of 5   → "Buzz"
// - Multiples of 3&5 → "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
