let name = "Rishi"
let value = 50
console.log(name+value);
// best method is ``(backticks) with ${}  string literal or string interpolation

console.log(`my name is ${name} and my total value of Repo's are ${value}`);

// creation of string as Object Using new

const gameName = new String('Free Fire');
console.log(gameName);
// prototypes
console.log(gameName[0]); // F
console.log(gameName.__proto__); // {}
// protoypes method

// 1. length
console.log(gameName.length);
// 2. Uppercase
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
// 3. char at i'th index
console.log(gameName.charAt(3));
//4.  index of a character
console.log(`the index is : ${gameName.indexOf('i')}`);
//5. substring
console.log(`the substring is : ${gameName.substring(0,6)}`);
console.log(`Substring is : ${gameName.substring(4)} `);
// 6. slice
let s = 0, e = 7;
console.log(`The Sliced part from ${s} to ${e} is ${gameName.slice(s,e)}`);
// we can also use -ve indexing in slice method but we can't use -ve in substring.
let si = -3 , ei = 10;
console.log(`(negativ indexing based )The Sliced part from ${si} to ${ei} is : ${gameName.slice(si,ei)}`);
// 7.trim()
let myname = '       Rishi       ';
console.log(`Original name is ${myname} , after trimmed the game name is ${myname.trim()}`);
 /*
         The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
         To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
 */

// 8. replace()
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(`original paragraph : ${paragraph} \nreplaced paragraph is : ${paragraph.replace("Ruth's" , 'my')}`);
let url = "https://Rishi.com/rishi%19gupta";
console.log(`My original url is ${url} \ncorrected url is : ${url.replace("%19" , '-')}`);


// 9. include
console.log(url.includes("rishi"));

// 👉 one interestin thing split something one the basis of whitespace, hyphen , comma anything
let somename = "Rishi-Rahul-Sunny-Radha-govind";
console.log(`The original name is : ${somename}`);
console.log(`after spliting the name : ${somename.split('-' , 3)}`);
// after spliting the name : Rishi,Rahul,Suny,Radha,govind
// 10. well formed
const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.toWellFormed());
  }
  // Logs:
  // "ab�"
  // "ab�c"
  // "�ab"
  // "c�ab"
  // "abc"
  // "ab😄c"

  // 11. search()
  let str = 'hello ji kase Ho sare aap Sab';
  let reg = /[A-Z]/;
  let findidx = str.search(reg);
  let val = str.charAt(findidx);
  console.log(`The indx is : ${findidx} \nThe value of idx is : ${val}`);
