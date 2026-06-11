let numbers = [5,12, 8 ,20];

let filtered = numbers.filter(function(value, index, array) 
{

    return value>10;

}
console.log(filtered);

/*let result = [];
for(let i = 0; i <numbers.length; i++) {
    if(numbers[i] > 10) {
        result.push(numbers[i]);
    }
}
     console.log(result);

     */