
/* 
  +=,-=, *=, /= ;

  ++, --;

  POST/PRE

  POST;
  use value FIRST then increase it after.

  PRE;
  increase
  value.
  

*/

let score = 10;
score += 5;
console.log(score); //15

let score2 = 10;
score2 -= 5;
console.log(score2); //5

let score3 = 10;
score3 *= 5;
console.log(score3); //50

let score4 = 10;
score4 /= 5;
console.log(score4); //2


let x = 5;
x++;
console.log(x); //6


let x1 = 5;
console.log(x1++); //5
console.log(x1); //6


let x2 = 5;
console.log(++x2); //6
console.log(x2); //6
