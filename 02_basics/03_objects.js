// singleton
// Object.create

// in this we are lookin on :- 👉 Object literals

const mySymbl = Symbol("key1")
 
const Jsusers = {
    // key : value
    name : "Rishi",
    "fullname" : "Rishikesh Gupta",
    age : 19,
    // use symbol in object
    [mySymbl] : "mykey1",
    email : "guptarishi@gmail.com",
    isLoggedIn : false,
      lastLoginDays : ["monday", "friday"]
}

     // normal way to access the objects
 console.log(Jsusers.name);
    // Best way is prefer to use this method of access of objects
console.log(Jsusers["email"]);
console.log(Jsusers["fullname"]);
console.log(Jsusers[mySymbl]);  // ⭐⭐⭐ accessable without string

                //  change object values Prefer using . oprator
Jsusers.age = 20
Jsusers.isLoggedIn = false
console.log(Jsusers);

            //   Object.freeze(object_name) method is used for no change in object
// Object.freeze(Jsusers)
// Jsusers.age = 22
// Jsusers.isLoggedIn = true
// Jsusers.email = "sunnyloene@gmail.com"
// console.log(Jsusers)

                //    object with function

Jsusers.greet = function(){
    console.log("Hello ji ");
}
console.log(Jsusers.greet());

            // A Function use the property of an object(Using the this keyword for access the Object properties)
Jsusers.greet2 = function(){
      console.log(`Hello, ${this.name} ji`);
}
console.log(Jsusers.greet2());

 //  node 02_basics/03_objects.js