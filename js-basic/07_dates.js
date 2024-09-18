let dt = new Date();
// console.log(dt);//2024-09-18T06:43:46.387Z

// console.log(dt.toString());//Wed Sep 18 2024 06:44:28 GMT+0000 (Coordinated Universal Time)
// console.log(dt.toDateString());//Wed Sep 18 2024
// console.log(dt.toISOString());//2024-09-18T06:49:35.183Z
// console.log(dt.toJSON());//2024-09-18T06:51:31.426Z
// console.log(dt.toLocaleDateString());//9/18/2024
// console.log(dt.toLocaleString());//9/18/2024, 6:53:00 AM
// console.log(typeof dt);//object

// let dt2 = new Date(2023,0,23);
// console.log(dt2.toDateString());//Mon Jan 23 2023

// let dt2 = new Date("01-22-2034");
// console.log(dt2.toLocaleString());//1/22/2034, 12:00:00 AM
// console.log(dt2.toDateString());//Sun Jan 22 2034

// let timestamp = Date.now();
// console.log(timestamp);//1726642893448 -miliseconnd

let newdate = new Date();
console.log(newdate.toLocaleString('default',{
    weekday:"long",//wednesday
    hour12:"true"
}));






