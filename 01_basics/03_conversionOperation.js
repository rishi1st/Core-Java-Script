let score = "Rishi";
console.log(typeof score); // string
console.log(score);  // Rishi

let valueInNumber = Number(score);
console.log(typeof valueInNumber);  // Number
console.log(valueInNumber); // NAN

// "44" => 44
// "44abc" => NaN (not an number)
// ture => 1; false => 0;

console.log("------------ Boolean -------------- ");
let isLogin = 1;
let booleanisLogin = Boolean(isLogin);
console.log(booleanisLogin); // true

// 1 => true; 0 => false
// "" => false
// "Rishi" => true;

console.log("----------------String-------------");
let someNumber = 44
let stringNumer = String(someNumber);
console.log(stringNumer); // 44
console.log(typeof stringNumer); // string

//*********************** Operations ********************
let value = 3;
let negvalue = -value;
// console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2); // power
console.log(2%2);

let str1 = "Hello";
let str2 = " Rishi ji";
let str = str1 + str2;
console.log(str);
//👉
 console.log("1" + 2 + 1);
 console.log(1 + "2" + 5);
 console.log(1+4+ "3");
