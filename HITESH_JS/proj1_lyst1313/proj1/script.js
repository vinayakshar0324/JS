var counter = document.querySelector(".counter");
var follwers = document.querySelector(".follwers");

let count = 1;

setInterval( () => {
   if ( count <= 1000){
    count++;
    counter.innerText = count;
   }
}, 1)

setTimeout(() => {
    follwers.innerText = "follwers in instagram!"
}, 3000)