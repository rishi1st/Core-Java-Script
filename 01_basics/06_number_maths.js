const score = 400;
console.log(`The score is : ${score}`);

// creating a number as a object
const balance = new Number(100);
console.log(`The number as a object is : ${balance}`);

// 1. convert number to string
console.log(`the number in a string is : ${balance.toString()} and it's length is : ${balance.toString().length}`);

// 2. to fixed for set value after decimal

console.log(`The fixed value of ${balance}  is ${balance.toFixed(2)}`);

// precision of a number

const num = 123.8966
console.log(`The precise value of ${num}  is : ${num.toPrecision(2)}`);

//  seperate zero's by commas based on 'en-IN'
const hundreds = 1000000
console.log(`Now the number ${hundreds} converted into readable form ${hundreds.toLocaleString('en-IN')}`);

// +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++

// node 01_basics/06_number_maths.js