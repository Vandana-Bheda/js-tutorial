// const userEmail = "";

// if(userEmail){
//     console.log("got user email")
// } else{
//     console.log("dont have user email");
// }// dont have user email


const userEmail = [];

if (userEmail) {
    console.log("got user email")
} else {
    console.log("dont have user email");
}// got user email

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// [], {}, "0", 'false', " ",function(){}

const emptyarr = [];
if(emptyarr.length === 0){
    console.log("array is empty");
}

const emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}