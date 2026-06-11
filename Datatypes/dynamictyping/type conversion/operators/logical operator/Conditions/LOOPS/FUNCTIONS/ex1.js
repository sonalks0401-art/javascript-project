function greet() {
    return "Hello Sagar";
}

console.log(greet());

function fullName(first , last) {
    return "Welcome"+ " " + first + " " + last;
}

console.log(fullName("Sonal" , "Singh"));




function calculateDiscount(price, discountPercent) {
    let discount = price* (discountPercent / 100);
    let final_price = price - discount;
    return final_price;
}

console.log(calculateDiscount(1000, 20));




