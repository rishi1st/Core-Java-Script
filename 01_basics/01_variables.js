const account_Id = 8849
let email_Id = "rishi@googlecom"
var accountPassword = "2191"
 accounCity = "Kaimur , Bihar"

 // account_Id = 2 // not allowed

 email_Id = "rishi@something.com"
 accountPassword = "21212121"
 accountCity = "Patna" 
 let account_State;
 // age hme ak sath multiple variable ko tabular ke form me print krna ho to we will use console.table([variable_Name])

console.table([account_Id , email_Id,accountPassword, accountCity , account_State])

/*
 Prefer not to use var
 bacause of issue in block scope and functional scope.

 ➡️ Prefer only let and const
*/