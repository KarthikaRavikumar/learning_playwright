//Adding elements --> push
//pop willl remove the last element of the array and return it
let fruit = ['apple','banana','orange'];
fruit.push('grape');
console.log(fruit);

//remocing elements --> pop
let lastFruit = fruit.pop();
console.log(lastFruit);
console.log(fruit);

//unshift will add an element to the beginning of the array
fruit.unshift('kiwi');
console.log(fruit);

//shift will remove the first element of the array and return it
let firstFruit = fruit.shift();
console.log(firstFruit);
console.log(fruit);

//splice can be used to add or remove elements at any position in the array
//splice(start, deleteCount, item1, item2, ...)
fruit.splice(1, 0, 'mango'); //adds mango at index 1 without removing any element
console.log(fruit);

fruit.splice(2, 1); //removes 1 element at index 2
console.log(fruit);
fruit.splice(1, 1, 'pear'); //removes 1 element at index 1 and adds pear at index 1
console.log(fruit);