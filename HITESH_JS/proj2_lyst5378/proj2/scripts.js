const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const orange = document.querySelector(".orange");
const voilet = document.querySelector(".voilet");
const pink = document.querySelector(".pink");

const conter = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor); 

const getBGColor =  (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;

} ;

// // var orangeElement = getBGColor(pink);

// // pink.addEventListener('mouseenter', () => {
// //     center.style.background = color;

// });

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    
    });

}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(voilet, getBGColor(voilet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));