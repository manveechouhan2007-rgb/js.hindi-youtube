const accountId = 144553
let accountEmail = "manvee@google.com"
var accountPassword = "12345"
accountCity = "Bhopal"

// accountId = 2 // not allowed
accountEmail = "mc@mc.com"
accountPassword = "151115"
accountCity = "Jaipur"
let accountState;

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var because of the issue in block scope and functional scope
*/
