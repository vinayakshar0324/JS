var name = "Hitesh";

console.log("line no3", name);

function sayName() {
    var name = "My H"
    console.log("line no 7", name);

    function sayNametwo(){
        console.log("line no 9 " , name);
    }
}

sayName();