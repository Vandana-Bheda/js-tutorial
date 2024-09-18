const score  = 200;
// console.log(score);//200

const balance = new Number(2000);
// console.log(balance);//[Number:2000]
// console.log(balance.toString());//2000 - converted into string
// console.log(balance.toString().length);//4
// console.log(balance.toFixed(2));//2000.00

// const num = 23.8966;
// const numtwo = 233.8966;
// const numthird = 2337.8966;
// console.log(num.toPrecision(3));//23.9
// console.log(numtwo.toPrecision(3));//234
// console.log(numthird.toPrecision(3));//2.34e+3

// const numfourth = 1000000;
// console.log(numfourth.toLocaleString());//1,000,000
// console.log(numfourth.toLocaleString('en-IN'));//10,00,000

//*********************************  maths  ****************************************** 

// console.log(Math);//object  [Math] {}
// console.log(Math.abs());//NaN
// console.log(Math.abs(4));//4
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.3));//5
// console.log(Math.floor(4.8));//4
// console.log(Math.min(4,5,3,2,8,10));//2
// console.log(Math.max(4,5,7,3,7,3,2,2));//7
// console.log(Math.max(4,5,7,3,7.7,3,2,2,7.1));//7.7
// console.log(Math.random());// from 0 to 1 e.g(0.015862078945072744)
// console.log((Math.random()*10) + 1);//1 t0 10 with decimals
// console.log(Math.floor(Math.random()*10) + 1);//1 t0 10 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min);//between 10 to 20
