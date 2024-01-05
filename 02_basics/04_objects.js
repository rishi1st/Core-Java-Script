
//  in this we are looking on singleton and constructor objects

//const tinderUser = new Object() // singleton

const tinderUser = {} // non - singleton

tinderUser.id = "123idfka"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
            //  👉 Object into Object (object nesting)
const regularUser = {
    emai: "sunnyLeone@gmail.com",
       fullname: {
              userfullname:{
                       fistname : "Rishikesh",
                       lastname : "gupta"
              }
       }
}

// console.log(regularUser)
 /*
          {
  emai: 'sunnyLeone@gmail.com',
  fullname: { userfullname: { fistname: 'Rishikesh', lastname: 'gupta' } 
}

 */


// console.log(regularUser.fullname)
/*
{ userfullname: { fistname: 'Rishikesh', lastname: 'gupta' } }
*/

// console.log(regularUser.fullname.userfullname)
/*
{ fistname: 'Rishikesh', lastname: 'gupta' }
*/

                //   Merge Objects
const obj1 = {1: "a",2: "B"}
const obj2 = {3: "x" , 4: "y"}

   //  case 1 : object into object
 const obj3 = {obj1, obj2}
// console.log(obj3)

  // 👉 case 2 : all in one object Using the Object.assign({} , ob1,  . .. . . ) we should use the {} for assigning all the objects in {} and then it's assign into finalObject

//   const finalobj = Object.assign({} , obj1, obj2);
//   console.log(finalobj);

//    case 3: spread using ...

const newObj = {...obj1 , ...obj2};
console.log(newObj);

                       // when DataBase return's array like
const users = [
         {
            id : 1334,
            email: "rdfevcvdfg@gmail.com"
         },
         {
            id : 13534,
            email: "reredfag@gmail.com"
         },
         {
            id : 13334,
            email: "adadg@gmail.com"
         },
         {
            id : 132334,
            email: "adfcgds@gmail.com"
         }
] 

            //   access value of object
console.log(users[1].email);

        //  let access the KEYS , VALUES AND ENTRIES of object 👉 The object returns the key or value in the format of Array

console.log(tinderUser);
console.log("----------------------- ");
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//                   hasOwnProperty('property_name')
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))
//  node 02_basics/04_objects.js