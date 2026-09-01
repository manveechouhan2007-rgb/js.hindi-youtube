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

// ***********************operations**************************

let value=3
let negValu = -value
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hello"
let str2=" world"
let str3= str1 + str2
console.log(str3);

console.log("1"+2); //12  agr starting m string h to vo pure ko string m hi consider karegi wrna bd m h to pehle wale operations as pr maths honge 
console.log(1+"2");  //12
console.log("1"+2+2);  //122
console.log(1+2+"2");  //32  

console.log(+true);  // 1
console.log(+"");   //0

let num1,num2,num3
num1=num2=num3= 2+2  //not a good way as code readability is less although you'll try to look smart but not so cool ans prefferable method

let gameCounter=100  //101
gameCounter++;
console.log(gameCounter);

let gameCounter=100   //101
++gameCounter;
console.log(gameCounter);
