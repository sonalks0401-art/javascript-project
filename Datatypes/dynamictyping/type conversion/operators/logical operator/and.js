/*  
   AND OPERATOR  &&
     
     both conditions  true>= true

     true && true > true
     true && false > false
     false && true > false
     false && false > false  


*/

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); //false
console.log(false && false); // false


let emailCorrect = true;
let passwordCorrect = true;

if (emailCorrect && passwordCorrect) {
    console.log("Login Sucessfully")
};
 
// login succesfully

let emailCorrect = true;
let passwordCorrect = false;

if (emailCorrect && passwordCorrect) {
    console.log("Login Sucessfully")
};

// nothing shows