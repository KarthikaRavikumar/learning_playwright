let status = ['pass','fail','skip'];
console.log(status[0]); // pass
console.log(status.at(-1)); // skip
// the .at(-1) methos will give you last item in the list 

// Modisying an array
status[1] = 'pending';
console.log(status); // ['pass','pending','skip']

//Lendgth
console.log(status.length); 