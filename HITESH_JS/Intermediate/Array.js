var countries = ["India", "USA", "japan", "Russia", ];

var states = new Array("Uttar-pradesh", "Delhi", "Assam", "mumbai");

console.log(states[1]);

console.log(states.length);

states[0] = "Punjab";

console.log(states[0]);

var user = ["hitesh", "hitesh@lco.dev", 3, 34, true];
console.log(user);

user.pop();
//console.log(user);

user.unshift("New Value");
//console.log(user);

user.shift();
//console.log(user);

console.log(user.indexOf(3));


console.log(Array.from("Hitesh"));


