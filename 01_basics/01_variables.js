const accountId = 144553
let accountEmail = "djb@gmail.com"
var accountPassword = "123345"
accountCity = "Paris"
let accountState;

// accountId = 2; // not allowed
accoutnEmail = "ad@ds.com"
accountPassword = "13423"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])