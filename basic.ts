let username = "Jack";
let hasLoggedIn = true;

username += " Herrington";

console.log(username);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = username.split(" ");

const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
  cool: boolean;
}

const myPerson: Person = {
  first: "Jack",
  last: "Herrington",
  cool: true
};

const ids: Record<number, string> = {
  10: "a",
  20: "b"
};

ids[30] = "c";