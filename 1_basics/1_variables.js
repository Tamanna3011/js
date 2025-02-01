const account_id = 12345
let account_email = "abc@google.com"
var account_paasword = "67890"
account_city ="ranchi"
let account_state;

//account_id = 6 // this is not allowed

account_email = "xyz@gmail.com"
account_paasword = "34567"
account_city = "bokaro"

console.log(account_id);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([account_id, account_email, account_paasword, account_city, account_state])