// Primitives : number, string, boolean, null, undefined
// Complex types : arrays, objects
// Function types, parameters

// Primitives
let age: number = 21; // type must be written in lower case -> Number points to a Number object, we want primitive type
age = 12;

let username: string = "default";

let isInstructor: boolean = false;

// Complex types
let hobbies: string[] = ["one", "two", "three"];

//type definition
type Person = {
  name: string;
  age: number;
};

let person: Person

person = {
  name: "Ursus",
  age: 21,
};

let people: Person[];

people = [
  {
    name: "Ursus",
    age: 21,
  },
  {
    name: "Zetorro",
    age: 31,
  },
];

// Type inference (and union types)

let course: string | number = "TS Guide"; // ts tries to guess which of which type the variable is

course = 12345; // also possible

// So we do not have to explicitely tell the type of a variable because typescript assumes it under the hood.

// Union type - allows more than one type to a variable

// Type aliases



// Functions & Types
function add(a: number,b: number) {
    return a + b; //type inference here -> number visible when hovering on func definition
}

function print(value: any) {
    console.log(value);
}

// Generics -- allows to write type safe, flexible functions. When certain type is used - for that function execution that type is locked in and known.

function insertAtBeginning<T>(array: T[],value: T) {
    const newArr = [value,...array]; // copying array
    // by adding a generic type - we say that values of array and added single value should be the same
    return newArr;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray,-1); // type any - potential problem

const stringArray = insertAtBeginning(['a','b','c'],'d')
//updatedArray[0].split(''); // no error although we have only numbers!! -> error appears (as intended) after addid a generic to func definition

