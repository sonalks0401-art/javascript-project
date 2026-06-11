/*
Callback Function in JavaScript

A callback function is a function that is passed as an argument to another function and is executed later.

arr.map(function{}())
arr.filter(item => item >10)





*/

let numbers = [1, 2, 3, 4,5, ]
let result = []
for(let i =1; i <numbers.length; i++) {
    result.push(numbers[i] * 2);
}
console.log(result);

//[ 4, 6, 8, 10 ]