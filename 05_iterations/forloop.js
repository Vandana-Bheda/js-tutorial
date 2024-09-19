// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }//1 to 10

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element === 5){
//         console.log("you meet 5");
//     }
//     console.log(element);
// }//1 2 3 4 you met 5 5 6 7 8 9 10

// 1 to 10 tables in one loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }//table of 1 to 10

// let newarr = ["batman","superman","flash"];
// for (let index = 0; index < newarr.length; index++) {
//     const element = newarr[index];
//     console.log(element);
// }// batman supermman flash

//break and continue

// for (i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log("5 detected");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

for (i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 detected");
        continue;
    }
    console.log(`value of i is ${i}`);
}