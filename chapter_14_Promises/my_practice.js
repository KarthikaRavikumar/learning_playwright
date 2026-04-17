

//basic promise in real life calculator
function makeOperation(a, b, operation) {
  return new Promise((resolve, reject) => {
    //valid inputs
    if(isNaN(a) || isNaN(b)){
        reject("Invalid input: Both a and b should be numbers.");
    }
    if (b>a &&operation === "sub"){
        reject("Subtraction Error: b should be less than or equal to a for subtraction.");
    }
    const ops = {
        add: (x, y) => x + y,
        sub: (x, y) => x - y,
        mul: (x, y) => x * y,
    };
    resolve(ops[operation](a, b));
});
}
function randomnum (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
num1 = randomnum(1,10);
num2 = randomnum(1,10);
/*makeOperation(num1, num2, "add")
.then(result => console.log("Addition Result of :",num1,"and",num2,":", result)); 
makeOperation(num1, num2, "sub")
.then(result => console.log("Subtraction Result of :",num1,"and",num2,":", result))
.catch(error => console.log("Error:", error));
makeOperation(num1, num2, "mul")
.then(result => console.log("Multiplication Result of :",num1,"and",num2,":", result))
.catch(error => console.log("Error:", error));
*/

//promise.all

const promise1 = makeOperation(num1, num2, "add");
const promise2 = makeOperation(num1, num2, "sub");
const promise3 = makeOperation(num1, num2, "mul");

Promise.all([promise1, promise2, promise3])
.then(results => {
    console.log("Results of all operations:");
    console.log("Addition:", results[0]);
    console.log("Subtraction:", results[1]);
    console.log("Multiplication:", results[2]);
})
.catch(error => console.log("Error in one of the operations:", error));