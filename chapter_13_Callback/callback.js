// Callback

function placeOrder(item, callback) {
    console.log("Placing order");
    callback(); // function call
}

// Define
function print() {
    console.log("Normal Fn - Done with the order");
}

// First Way
placeOrder("Burger", print);

// Second Way - Anonymous Function
placeOrder("Burger", function () {
    console.log("Anonymous Fn, I am also a function without name!")
});

// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function without name!")
});

test('has title', async ({ page }) => {

});

function test(text, callback) {
    console.log(`Hi, this is test, ${text}`);
    callback();
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});

test('has title', async ({ page }) => {

});