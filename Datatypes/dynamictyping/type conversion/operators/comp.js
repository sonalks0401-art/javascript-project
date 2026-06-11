/*
 1*1 equal
 true/false


 40 marks
 1000 shirts

 login - email/password

 logic building - comparison

  it means compare values.
  true/false

  C-A
  equality comparison
  ==,===, !=, !==, 

  C-B greater/lesser
  <, >, =<, >=  

  C-C boolean 
  true/false

  == vs ===

  == - loose equality
  values, not types > type coercion 

  eg:
      "5" == 5
      left string | right number

      "5" > 5 
      5 ==5 // true


===

   values, AND TYPES

RULE:-

 1- ALWAYS USE ===    
*/ 

console.log("5" == 5); //TRUE
console.log(true == 1); //TRUE
console.log(false == 0); //TRUE
console.log("" == 0); //TRUE
console.log("" ==  false); //TRUE
console.log( null ==  undefined); //TRUE

//===

console.log("5" === 5); //FALSE
console.log(true === 1); //FALSE
console.log(5 == 5); //TRUE
