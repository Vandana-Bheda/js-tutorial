const mynums = [1, 2, 3];

// const tot = mynums.reduce((a, c) => {
//     console.log(`accum : ${a} and curr : ${c}`);
//     return a + c
// },0)
// console.log(tot);//6


const shoppinCart = [
    {
        courseName: 'js course',
        price: 2999,
    },
    {
        courseName: 'python cource',
        price: 999,
    },
    {
        courseName: 'mobile dev cource',
        price: 5999,
    },
    {
        courseName: 'data science cource',
        price: 12999,
    },
]

const pricetopay = shoppinCart.reduce((a, i) =>  a + i.price , 0)
console.log(pricetopay);

