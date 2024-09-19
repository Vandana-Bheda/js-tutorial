// for of 

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    // console.log(i);
}// 1 to 5

const greeting = "hello world!";
for (const greet of greeting) {
    // console.log(greet);
}// h e l l o  w o r l d !


// ********************************* maps **********************************
const mapex = new Map();
mapex.set("IN","India");
mapex.set("FR","France");
mapex.set("USA","United States of India");

// console.log(mapex);

for (const [key,values] of mapex) {
    // console.log(key, ":-" ,values);
}

let newobj = {
    'game1' : "basketball",
    'game2' : "football"
}

for (const [key,value] of newobj) {
    // console.log(key,value)
}// newobj is not iteratable


