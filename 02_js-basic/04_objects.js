//singleton

// const tinder = new Object(); // singleton object
// console.log(tinder);//{}

const tinderuser = {};       // non singleton object
// console.log(tinderuser);//{}

tinderuser.id = "123Abc";
tinderuser.name = "vandana";
tinderuser.isLoggedIn = false;
// console.log(tinderuser);//{ id: '123Abc', name: 'vandana', isLoggedIn: false }

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vandana",
            lastname: "bheda"
        }
    }
}

// console.log(regularuser.fullname);//{ userfullname: { firstname: 'vandana', lastname: 'bheda' } }
// console.log(regularuser.fullname.userfullname);//{ firstname: 'vandana', lastname: 'bheda' }
// console.log(regularuser.fullname.userfullname.firstname);//vandana


const obj1 = {1: "a",2: "b",3: "c"};
const obj2 = {4: "d",5: "e",6: "f"};

// const obj3 = {obj1,obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }

// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const obj3 = {...obj1,...obj2};
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
    {
        id: 1,
        email:"asd@gmail.com",
    },
    {
        id: 1,
        email:"asd@gmail.com",
    },
    {
        id: 1,
        email:"asd@gmail.com",
    }
]

users[1].email;
// console.log(tinderuser);//{ id: '123Abc', name: 'vandana', isLoggedIn: false }

// console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderuser));//[ '123Abc', 'vandana', false ]
// console.log(Object.entries(tinderuser));//[ [ 'id', '123Abc' ], [ 'name', 'vandana' ], [ 'isLoggedIn', false ] ]


// console.log(tinderuser.hasOwnProperty('isLoggedIn'));//true

// destructure object

const course = {
    coursename: "js in hindi",
    price: 999,
    coursetype: "online",
}

const {coursetype: ctype} = course
console.log(ctype);//online