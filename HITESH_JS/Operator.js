// var num1 = 7;
// var num2 = 6;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// Discount = (List - Sell)/List * 100

var sellingPrice = 199;
var listPrice = 799;

var Discount = ((listPrice - sellingPrice)/listPrice ) * 100;
console.log("Discount Percentage : " + Discount);

displayDiscountPercentage = Math.round(Discount);

console.log(displayDiscountPercentage + "% off");
