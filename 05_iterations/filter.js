// const arr = ["js", "java", "pyhton", "ruby", "c++"];

// const values = arr.forEach( (val) => {
//     // console.log(val);//js java pyhton ruby c++
// })

// console.log(values);//undefined

// const values = arr.forEach( (val) => {
//     // console.log(val);//js java pyhton ruby c++
//     return val;//foreach loop does not return value
// })

// console.log(values);//undefined

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mynum2 = mynums.filter((num) => num > 4);// filter returns value , foreach not
// console.log(mynum2);//[5,6,7,8,9,10]

// anothe way to write filter funtion
// const mynum2 = mynums.filter((val) => {
//     return val > 4;
// });
// console.log(mynum2);

// const mynum2 = []
// mynums.forEach((num) => {
//     if (num > 4) {
//         mynum2.push(num);
//     }
// });

// console.log(mynum2);//[5,6,7,8,9,10]

const books = [
    {
        title : 'Book 1',
        genre:'Fiction',
        publish:1981,
        edition:2004
    },
    {
        title : 'Book 2',
        genre:'Non-Fiction',
        publish:1992,
        edition:2008
    },
    {
        title : 'Book 3',
        genre:'History',
        publish:1999,
        edition:2007
    },
    {
        title : 'Book 4',
        genre:'Non-Fiction',
        publish:1989,
        edition:2010
    },
    {
        title : 'Book 5',
        genre:'Science',
        publish:2009,
        edition:2014
    },
    {
        title : 'Book 6',
        genre:'Fiction',
        publish:1987,
        edition:2010
    },
    {
        title : 'Book 7',
        genre:'History',
        publish:1986,
        edition:1996
    },
    {
        title : 'Book 8',
        genre:'Science',
        publish:2011,
        edition:2016
    },
    {
        title : 'Book 9',
        genre:'Non-Fiction',
        publish:1981,
        edition:1989
    },
];

let userBooks = books.filter( (book) => book.genre === "History");//book3 book7
userBooks = books.filter( (book) => book.publish > 2000);//book5 book8
userBooks = books.filter( (book) => book.publish > 1995 && book.genre === "History");//book3

console.log(userBooks);
