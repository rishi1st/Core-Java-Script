const score = 400;
console.log(`The score is : ${score}`);
// The score is : 400

// creating a number as a object
const balance = new Number(100);
console.log(`The number as a object is : ${balance}`);
// The number as a object is : 100

// 1. convert number to string
console.log(`the number in a string is : ${balance.toString()} and it's length is : ${balance.toString().length}`);
// the number in a string is : 100 and it's length is : 3

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
// abs: Returns the absolute value of a number.
console.log(Math.abs(-4)); //4 
// round: Rounds a number to the nearest integer.
console.log(Math.round(4.6)); // 5
// ceil: Returns the smallest integer greater than or equal to a number.
console.log(Math.ceil(4.2)); // 5
// floor: Returns the largest integer less than or equal to a number.
console.log(Math.floor(4.8)); // 4
// sqrt: Returns the square root of a number.
 console.log(Math.sqrt(25)); 5
// pow: Returns the base to the exponent power, that is, base raised to the power exponent.
 console.log(Math.pow(2,6)); // 64
// min: Returns the smallest of zero or more numbers.
console.log(Math.min(1,3,3,63,7)); // 1
// max: Returns the largest of zero or more numbers.
console.log(Math.max(1,3,3,63,7)); //63
// random: Returns a pseudo-random number between 0 and 1.
console.log(`The random number is : ${Math.random()}`); // The random number is : 0.1720091397133372
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
