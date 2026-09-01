let score="33abc"
console.log(typeof score)
console.log(typeof (score));

// "33"=33
// "33abc"= NaN
// true=1 , false=0

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// 1=true , 0=false
// ""=false
//"manvee"=true

let isLoggedIn="1"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
