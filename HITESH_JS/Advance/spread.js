// var returnedValue = Math.max(2, 5, 7, 5, 9, 8, 6,);
// console.log(returnedValue);

// var myObj = {}

// Object.assign(myObj,{a:1, b:2, c:3}, {z:9, y:8, x:7});
// console.log(myObj);


function sumOne(a, b){
    return a + b;

}
var myA = [5, 4]
console.log(sumOne(a,b,...myA)); // spread operator
   let  multi = a * b;
function sumTwo(...args){
    let sum = 0;
    for (const arg of args) {
        sum += arg;

    }
    return [sum, multi];

}

console.log(sumTwo(2, 3, 1, 7, 5));