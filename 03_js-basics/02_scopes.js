// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);//a is not defined
// console.log(b);//b is not defined 
// console.log(c);//30


function nestedScope() {
    const usernm = "vandana";

    function innerfunction() {
        const website = "youtube";
        console.log(usernm);
    }
    // console.log(website);//website is not defined

    innerfunction();
}

// nestedScope()

if (true) {
    const usrnm = "vandana"
    if (usrnm === "vandana") {
        const website = " youtubee"
        // console.log(usrnm + website);//vandana youtubee
    }
    // console.log(website);// website is not defined
}
// console.log(usrnm);//error

//********************************interesting*****************************

console.log(addOne(5));//6
function addOne(num) {
    return num + 1;
}
console.log(addOne(5));//6



// addTwo(5);//Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(5));//7

