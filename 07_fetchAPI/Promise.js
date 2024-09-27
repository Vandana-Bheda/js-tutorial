// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async task is completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("promise consumed");

// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async task 2 completed');
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("promise consumed task 2");

// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("async task 3");
//         resolve({username : 'vandana'})
//     }, 1000);
// })

// promiseThree.then((user) => {
//     console.log(user.username);
//     console.log(user.username);

// })


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'vandana', pass: '123456789' })
        }
        else {
            reject('ERROE: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username;

}).then((username) => {
    console.log(username);

}).catch((error)=>{
    console.log(error);

}).finally(()=>{
    console.log("the promise is either reject or reject");

})

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E: ",error);

//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/vandana-bheda')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))