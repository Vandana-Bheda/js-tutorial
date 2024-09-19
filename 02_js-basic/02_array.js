const mar_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// mar_heros.push(dc_heros);
// console.log(mar_heros);//["thor","ironman","spiderman",["superman","flash","batman"]]
// console.log(mar_heros[3]);//["superman","flash","batman"]
// console.log(mar_heros[3][1]);//flash   

// mar_heros.concat(dc_heros);
// console.log(mar_heros);//[ 'thor', 'ironman', 'spiderman']

// const newarr = mar_heros.concat(dc_heros);
// console.log(newarr);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const allheros = [...mar_heros, ...dc_heros];
// console.log(allheros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherarr.flat(Infinity);
// console.log(realAnotherArray);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("vandana"));//false
// console.log(Array.from("vandana"));//['v', 'a', 'n','d', 'a', 'n','a']
// console.log(Array.from({name:"vandana"}));//[]


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));//[100,200,300]