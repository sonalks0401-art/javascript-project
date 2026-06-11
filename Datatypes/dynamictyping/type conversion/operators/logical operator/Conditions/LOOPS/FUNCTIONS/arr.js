/*  syntax:-

const add = (a, b) => {
    return a+b;
}

=> function ko replace kiya h isne.
*/



const add = (a, b) => {
    return a + b;
}

console.log(add(10, 20));


const add1 = (a1, b1) => a1 + b1;

console.log(add1(10, 20));

// Note: Arrow functions do not exactly replace all functions. They are a shorter way to write
//functions and behave differently with this, but for basic examples they are often used as a replacement.


const sayhi = () => "Hii Jii";
console.log(sayhi());