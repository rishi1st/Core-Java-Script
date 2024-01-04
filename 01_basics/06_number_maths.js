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

console.log(Math);
// abs() 
console.log(Math.abs(-4));
//  round is used for get without decimal value and nearest value
console.log(Math.round(4.6));
// ceil() is used for maximimum nearest value
console.log(Math.ceil(4.2));
// floor() is used for minimum
console.log(Math.floor(4.8));
// sqrt()
 console.log(Math.sqrt(25));
// pow()
 console.log(Math.pow(2,6));
// min()
console.log(Math.min(1,3,3,63,7));
// max()
console.log(Math.max(1,3,3,63,7));
//  random()
console.log(`The random number is : ${Math.random()}`);
/*
    Without value the random() function generate only numbers between 0 to 1

*/
console.log(`The number is : ${Math.floor((Math.random()*10 )+ 1)}`);
/*
       it define number between 0 to 10
*/


const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max-min + 1))+min);

const mn = 1001
const mx = 9999
console.log(`Your OTP is :  ${Math.floor(Math.random() * (mx -mn + 1)+mn)}`);


// node 01_basics/06_number_maths.js