//memoryis of two types:
//1. stack: for primitive types -call by value
//2. heap : for non-primitive types - call by reference

//stack
let myYoutubename="manveedotcom"
let anothername=myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename);  //manveedotcom -neeche copy badli h original same rahega
console.log(anothername);  //chaiaurcode

//heap
let userone={
    email:"user@google.com"
    upi: "user@ybl"
}
let usertwo=userone
usertwo.email="manvee@google.com"  //this is how objects are accessed using dot  //original address or memory m change krdiya
console.log(userone.email);   //manvee@google.com  //kuki upr main address m change hua
console.log(usertwo.email);   //manvee@google.com

