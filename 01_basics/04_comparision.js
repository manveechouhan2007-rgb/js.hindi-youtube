console.log(2>1); //output will be in boolean true/false
console.log(2>=1); // best as same datatypes are compared
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1); // true aayega js ne number m convert krdiya lekin ese nhi krna h same datatypes use kre kuki predictadble results nhi aate

console.log(null>0);  //false //avoid these as they convert null sometimes into NaN or 0 or anything
console.log(null==0);  //false
console.log(null>=0);  //true

console.log(undefined>0);  //in every case result will be false
console.log(undefined>=0); //avoid these also only same datatypes comparision is prefferable
console.log(undefined==0);
console.log(undefined<0);
