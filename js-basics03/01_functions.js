function myname(){
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("a");
    console.log("n");
    console.log("a");
};

// myname();//v
//a
//n
// d
// a
// n
// a

// function sum(num1,num2){ //num1 and num2 parameters
//     console.log(num1+num2);
// }
// sum(2,4);//6   //2 and 4 arguments  
// sum(2,"4");//24
// sum(2,"a");//2a



function sum(num1,num2){
    // let result = num1+num2;
    // return result;

    return num1+num2;
}

const result = sum(2,4);
// console.log(result);//6

function userlogin(username){
    // if(username===undefined){
    //     console.log("Please entre username");
    //     return;
    // }
    if(!username){
        console.log("Please entre username");
        return;
    }
    return `${username} just logged in`
}

// console.log(userlogin("vandana"));//vandana just logged in
// console.log(userlogin(""));//  just logged in
// console.log(userlogin());//undefined just logged in

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(100,200,300));//[100, 200, 300]

const user = {
    usernm: "vandana",
    price: 299
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.usernm} and price is ${anyobject.price}`);
}

// handleObject(user);//user name is vandana and price is 299
// handleObject({
//     usernm:"vandanaa",
//     price: 323
// });//user name is vandanaa and price is 323

const nwarr = [200,300,400,455];

function returnSeconndValue(getarr){
    return getarr[1];
}

console.log(returnSeconndValue(nwarr));//300
console.log(returnSeconndValue([100,300,400,500]));//300