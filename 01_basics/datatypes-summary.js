


/* 
1.Primitive datatypes(call by value) -> 7 types : String , Number ,Boolean , null , undefined , Symbol , BigInt 
*/

 /*
 2. Non primitive/ Reference datatype -> types : Array , Objects , Functions
*/

/*
➡️ Here are the different data types in JavaScript and their typeof:

String:
A string is a sequence of characters. It is represented by single or double quotes. For example, 'Hello', "World".typeof returns 'string' for Strings.

Number:
A number is a numeric value. It can be an integer or a floating-point number. For example, 10, 3.14.typeof returns 'number' for Numbers.

Boolean:
A boolean is a logical value. It can be either true or false. For example, true, false.typeof returns 'boolean' for Booleans.

Null:
Null is a special value that represents the absence of a value. It is not the same as undefined.typeof returns 'object' for Null.

Undefined:
Undefined is a special value that represents a value that has not been assigned yet. It is not the same as null.typeof returns 'undefined' for Undefined.

Symbol:
A symbol is a unique value that cannot be converted to a string or number. It is used to represent unique properties of objects.typeof returns 'symbol' for Symbols.

BigInt:
A BigInt is a numeric value that can be larger than the maximum value of a Number. It is used to represent large integers.typeof returns 'bigint' for BigInts.
 
➡️ Here are the non-primitive data types in JavaScript:

👉Object:
This data type represents a collection of key-value pairs. Objects can be used to store data in a structured way. The typeof operator will return the string "object" for this data type.

👉Array:
This data type represents an ordered list of values. Arrays can contain any type of data, including numbers, strings, booleans, and other arrays. The typeof operator will return the string "object" for this data type.

👉Function:
This data type represents a function. Functions can be used to perform actions or to calculate values. The typeof operator will return the string "function" for this data type.
*/

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('543');
const dusraid = Symbol('543');

console.log(id == dusraid);

const bigNumber = 598492894529459284n;
console.log(typeof bigNumber);


const gunda = ["mydog", "mybrother", "mygf- Gundi" , "mydada"];

let meraObj = {
    name: "Rishi",
    age: 19,
}

     const hello =   function(){
            console.log("Hello ji kaise sare");
        }


// ++++++++++++++++++++++++++ Stack and Heap Memomry ++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

/*
 👉In JavaScript, garbage collection is the process of automatically reclaiming memory which is no longer referenced by any program variable. This is in contrast to manual memory management, in which the programmer is responsible for explicitly allocating and deallocating memory.
*/


let nam = "Rishkesh Gupta";
let anothername = nam;
anothername = "Rishi";
console.log(nam);
console.log(anothername);

// simple bola jaye to exact value nhi di jati uski copy di jati hai ->stack
// 👉 jitne bhi primitive data types hai vo direct stack me store hote and non-primitive wale Heap me


let userOne = {
     email: "mujhenhipta@gmail.com",
     upi: "nhibounga@ybl",
}

let userTwo = userOne

userTwo.email = "lelo@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);




//node 01_basics/datatypes-summary.js
