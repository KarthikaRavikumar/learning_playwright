// what will the following code generate

if ([]) {
    console.log("True");
}

// what will the following code generate
//this means that even though there is no value assigned to response the value is set to null

let response;
if (response) {
    console.log("True");
}
else if (response !== null) {
    console.log("False");
}

//you can create a statement even without else block but as a QA its advisable to add the else block
