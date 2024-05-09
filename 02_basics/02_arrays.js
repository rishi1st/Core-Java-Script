 let mHeros = ["thor" , "Ironman", "spiderman"]
 let dcHeros = ["superman", "flas ", "batman"]
            // -------------------- array into array
//  mHeros.push(dcHeros);
//  console.log(mHeros);
           // we can also use concat 
//  let allheros = mHeros.concat(dcHeros)
//  console.log(allheros)

           // 👉 Best one is spread method ...
// let new_heros = [...mHeros , ...dcHeros];
// console.log(new_heros);
           // when we have array into array then
// const arrInarr = [1,2,3,[4,5,6] , 7,[6,7,[4,5]]]
// const onearr = arrInarr.flat(Infinity)
// console.log(arrInarr);
// console.log(onearr)
               // isArray is used for check array or not
console.log(Array.isArray("Rishi"))
                // from is used for make array
console.log(Array.from("Rishi")); // (5) ['R', 'i', 's', 'h', 'i']
             // 👉 Interesing case
console.log(Array.from({name:"Rishi"})) // []
             // of() Returns a new Array form the set of elements.
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
