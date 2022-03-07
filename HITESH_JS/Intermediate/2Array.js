// function isEven(){
//     if (element % 2 === 0) {
//         return true;

//     }
//     return false;

// }

// console.log(isEven(2));


var isEven = (element) => {
    // if (element % 2 === 0) {
    //     return true;

    // }
    // return false;
 return element % 2 === 0;

}

// console.log(isEven(2));

var results = [2, 4, 6, 8].every(() => (e % 2 === 0));
console.log(results);



