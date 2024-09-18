//singleton 
//object.create


//object literals

const mysym = Symbol("key1");

const jsuser = {
    name: "vandana",
    "fullname": "vandana bheda",
    [mysym]: "keyy1",
    age: 20,
    loaction: "ahmedabad",
    email: "vandana123@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"],
}

// console.log(jsuser.email);//vandana123@gmail.com
// console.log(jsuser["email"]);//vandana123@gmail.com
// console.log(jsuser.fullname);//vandana bheda
// console.log(jsuser[mysym]);//keyy1
// console.log(typeof jsuser[mysym]);//string

// jsuser.email = "newvandana@gmail.com";
// console.log(jsuser.email);//newvandana@gmail.com

// Object.freeze(jsuser)
// jsuser.email = "newvandana3453635465@gmail.com";
// console.log(jsuser);//{
//     name: 'vandana',
//     fullname: 'vandana bheda',
//     age: 20,
//     loaction: 'ahmedabad',
//     email: 'newvandana@gmail.com',
//     isLoggedIn: false,
//     lastLogInDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'keyy1'
//   }

jsuser.greeting = function () {
    console.log("hello  there");
}
jsuser.greetingTwo = function () {
    console.log(`Hello dear ${this.name}`);
}

// console.log(jsuser);//{
//     name: 'vandana',
//     fullname: 'vandana bheda',
//     age: 20,
//     loaction: 'ahmedabad',
//     email: 'vandana123@gmail.com',
//     isLoggedIn: false,
//     lastLogInDays: [ 'Monday', 'Saturday' ],
//     greeting: [Function (anonymous)],
//     [Symbol(key1)]: 'keyy1'
//   }

// console.log(jsuser.greeting);//[Function (anonymous)]
// console.log(jsuser.greeting());//hello there    undefined

console.log(jsuser.greetingTwo());//hello dear vandana  undefined