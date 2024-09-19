//array

const myarr = [0, 1, 2, 3, 4, 5];
const myarr2 = new Array(1,3,5,6,4);
// console.log(myarr[1]);//1

//array  methods

// myarr.push(6); 
// console.log(myarr);//[0,1,2,3,4,5,6]
// myarr.push(7);
// console.log(myarr);//[0,1,2,3,4,5,6,7]
// myarr.pop();
// console.log(myarr);//[0,1,2,3,4,5,6]

// myarr.unshift(0);
// console.log(myarr);//[0,0,1,2,3,4,5]
// myarr.unshift(4);
// console.log(myarr);//[4,0,1,2,3,4,5]

// myarr.shift();
// console.log(myarr);//[1,2,3,4,5]

// console.log(myarr.includes(9));//false(boolean)
// console.log(myarr.indexOf(9));//-1

// const newarr = myarr.join();
// console.log(myarr);//[0,1,2,3,4,5]
// console.log(newarr);//0,1,2,3,4,5
// console.log(typeof newarr);//string

//slice, splice

console.log("A",myarr);//A [0,1,2,3,4,5]

const newarr1 = myarr.slice(1,3);//slice do not affectoriginal array

console.log(newarr1);//[1,2]
console.log("B",myarr);//B [0,1,2,3,4,5]

const newarr2 = myarr.splice(1,3);//splice affects original array
console.log(newarr2);//[1,2,3]
console.log("C",myarr);[0,4,5]