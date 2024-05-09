 // array

 const myArr = [0,1,2,3,4,5]
 const myheros = ["shaktimaan","nagraj", "hanuman"]; 
 console.table(myArr);


Index       Value
0	     3
1	     2
2	     1
3	     4
4	     2
5	     4
6	     3
 console.table(myheros);

 // array as object
 const myArr2 = new Array(1,2,3,4,5,6);
 console.log(typeof myArr2);
 console.log(myArr2); 

 // array methods

 // 1. push() used to add at the last position on the array
 myArr.push(6)
 console.log(myArr); // [0,1,2,3,4,5,6]

 // 2. pop() use to remove last element of the array

myArr.pop() // [0,1,2,3,4,5]

// 3. usnshift() is used for add element at the first of the element
myArr.unshift(9);

// 4. shift() used for delete fist element
myArr.shift();
// 5. includes() is exist or not
console.log(myArr.includes(4));

// 6. indexOf() return the index of element

console.log(myArr.indexOf(3));

// 7. join() is used for convert array to string

const newArr = myArr.join();

console.log(myArr)
console.log(newArr);
console.log(typeof newArr);

//8. slice , splice

console.log("A" , myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
// Here slice() method pick index( 1, 2 ) only not 3;

console.log("B" , myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
// Here splice() method pick index( 1, 2 and 3 ) 

console.log("C" , myArr);
console.log(myn2); // [0,4,5]

// Bacause i have used splice method so , original array affect.

/*
⭐⭐⭐
slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.
*/
