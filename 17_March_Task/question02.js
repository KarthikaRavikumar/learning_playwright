// What is the output?

console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";
//b) "error" 