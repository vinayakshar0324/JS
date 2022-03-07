//import user from "./";

const User = require("./classJs.js");

const hitesh = new User("Hitesh", "Hitesh@lco.dev")

console.log(hitesh.getInfo());

hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("angular Bootcamp");

console.log(hitesh.getCourseList());


let courses = hitesh.getCourseList();

courses.forEach((c) => console.log(c));
