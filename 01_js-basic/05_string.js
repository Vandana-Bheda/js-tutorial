const namee = "vandana";
const repocount = 10;

// console.log(namee+repocount); // old way(syntax) to  write strings

// console.log(`Hello my name is ${namee}, my repocount is ${repocount}`);

// console.log("hello");

const myname = new String("vandana");

// console.log(myname);
// console.log(myname[0]);//v
// console.log(myname.__proto__);//{}
// console.log(myname.length);//7
// console.log(myname.toUpperCase());//VANDANA
// console.log(myname.charAt(4));//a
// console.log(myname.indexOf('d'));//3


const mynametwo = new String("vandana-bheda-intern-frontend");
// console.log(mynametwo.substring(0,7));//vandana
// console.log(mynametwo.slice(0,7));//vandana
// console.log(mynametwo.slice(2,-9));//nd
console.log(mynametwo.split("-"));


const newname = "       vandana      ";
// console.log(newname);        //(       vandana      )
// console.log(newname.trim()); //(vandana) - works on white spaces and terminators

const url = "https://vandana.com/vandana%20bheda";
// console.log(url.replace("%20","-"));//https://vandana.com/vandana-bheda
// console.log(url.includes("vand"));//true
// console.log(url.includes("ndva"));//false
