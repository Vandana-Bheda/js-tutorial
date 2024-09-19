const user ={
    username : "vandana",
    prc: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();//vandana, welcome to website
// user.username="sam";
// user.welcomeMessage();//sam, welcome to website

// console.log(this);//{}

// function parent(){
//     let username = "vandana";
//     console.log(this.username);//undefined
// }
// parent()

const parent = () => {
    let username = "vandana";
    console.log(this.username);//undefined
}
// parent();

// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(4,3));//7


// const addTwo = (num1, num2) => num1+num2;
// console.log(addTwo(4,3));//7

// const addTwo = (num1, num2) => {num1+num2};
// console.log(addTwo(4,3));//undefined // here you need to write return keyword 

// const addTwo = (num1, num2) => (num1+num2);
// console.log(addTwo(4,3));//7

// const addTwo = (num1, num2) => ({username:"vandana"});
// console.log(addTwo());//{ username: 'vandana' }

