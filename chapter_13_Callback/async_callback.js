console.log("Test 1: started"); // This will execute first

setTimeout(function () { // This is simulating an API call which takes 2 seconds to respond
    console.log("Test 2 : API response received!")
}, 2000);

console.log("Test 3: Moving to next last"); // This will execute before the API response is received, because setTimeout is asynchronous