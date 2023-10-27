const accountID = 12432
let accountEmail = "rishi4@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// Not allowed
// accountID = 2 (Change to const variable)

accountEmail = "harry4@gmail.com"
accountPassword  ="1345"
accountCity = "Ghaziabad"

console.log(accountID);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity, accountState])