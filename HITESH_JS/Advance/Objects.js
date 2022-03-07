var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`course Count is ${this.courseCount}`);
    };
};

var Hitesh = new  User("Hietsh", 2);
Hitesh.getCourseCount();
console.log(Hitesh.firstName);



var Sam = new User("Sam", 3);
Sam.getCourseCount();
// console.log(Sam.courseCount);
