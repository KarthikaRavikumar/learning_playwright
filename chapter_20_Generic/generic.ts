//can assign any type to a function or array , class, object, etc.

function getfirstResult<T>(Results: T[]): T {
  return Results[0];
}
let numResults = getfirstResult([1, 2, 3]);
let stringResults = getfirstResult(["a", "b", "c"]);

console.log(numResults);
console.log(stringResults);
