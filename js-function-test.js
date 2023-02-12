import { getName } from require("./function");

console.log(getName({
    first: "A",
    last: "B"
})); // will throw error when executed using "node js-function-test.js" command
// because its ts file, so we need to compile its first
// using "npx tsc function.ts"
// type checking only done in compile time, not runtime
// thats why compiled js file will not include type checking
// in reason of runtime type checking will be so expensive