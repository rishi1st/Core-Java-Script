// Dates

let myDate = new Date();
console.log(myDate.toString()); //Thu Jan 04 2024 12:01:50 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Thu Jan 04 2024

console.log(myDate.toLocaleDateString()); //         1/4/2024

console.log(myDate.toLocaleString()); //1/4/2024, 12:01:50 PM

// --------------- Create own date

// let mycrateDate  = new Date(2024 , 0, 4) //1/4/2024, 12:00:00 AM 
 //let mycrateDate  = new Date(2024 , 0, 4 , 5 , 42) //1/4/2024, 5:42:00 AM

// let mycrateDate  = new Date("2023-01-04") // 1/4/2023, 12:00:00 AM

let mycrateDate  = new Date("04-01-2024"); //4/1/2024, 12:00:00 AM
console.log(mycrateDate.toLocaleString()); 





// ------------ Time stamp ------------------

let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(mycrateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());


// node 01_basics/07_DateAndTime.js

