const myobject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
}

for (const key in myobject) {
    // console.log(key);//js cpp rb
}

for (const key in myobject) {
    //console.log(myobject[key]);//javascrip c++ ruby
}

for (const key in myobject) {
    // console.log(`${key} is shortcut for ${myobject[key]}`);//js is shortcut for javascript cpp is shortcut for c++ rb is shortcut for ruby
}

const myarr = ["js","cpp","pyhton","ruby","c"];

for (const key in myarr) {
    // console.log(key);//0 1 2 3 4
    // console.log(myarr[key]);//js cpp python ruby c
}

const mapex = new Map();
mapex.set("IN","India");
mapex.set("FR","France");
mapex.set("USA","United States of India");

for (const key in mapex) {
    //console.log(key);//blank
}

