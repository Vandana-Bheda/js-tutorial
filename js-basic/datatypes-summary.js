// primitive

//7 types : string, number, boolean, null, undefined, symbol, BigInt

const name = "vandana"; // string
const score = 100; // number
const isLoggedIn = true; // boolean
const years = null; // null
let age; //undefined

const id = Symbol('123'); //symbol
const newId = Symbol('123'); //symbol

// console.log(id === newId); //false

const bigNumber = 235345346346544n; //bigint

//reference (non premetive)

// arrays, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]; // array

let newObj = {
    name: "vandana",
    age: 22,
} // object

const myFunction = function(){
    console.log("hello world");
}


//*********************************************************

// stack (premitive), Heap(non-premitive)
