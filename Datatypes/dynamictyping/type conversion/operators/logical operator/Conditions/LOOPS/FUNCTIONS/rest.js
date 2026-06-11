function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
       total += num;  
    } 

    return total;
     
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
console.log(sum(8));


//n JavaScript, ...numbers is called the rest parameter (in function parameters) or the spread operator (in arrays/objects).
// collects all arguments into a single array named numbers.


