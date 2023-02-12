import addNumber, { addString, getName } from "./function";

console.log(addNumber(1,2));
console.log(addString("Imam", "Setiawan"));
console.log(addString("Imam"));

console.log(getName({first: "Imam", last: "Setiawan"}));