//if

// if(condition){
//     code to execute if condition is true
// } else{
//     code to execute if condition is false
// }

//nullish coalescing operator (??): null undefined

// let val1;

// val1 = 5 ?? 10;
// console.log(val1);//5

// val1 = null ?? 10;
// console.log(val1);//10

// val1 = undefined ?? 10;
// console.log(val1);//10


//ternary operator
// condition?true:false

// const iceTeaPrc = 100;
// iceTeaPrc >= 100 ? console.log("expensive") : console.log("its normal");//expansive

// const iceTeaPrc = 99;
// iceTeaPrc >= 100 ? console.log("expensive") : console.log("its normal");//its normal

const iceTeaPrc = 101;
iceTeaPrc >= 100 ? console.log("expensive") : console.log("its normal");//expansive
