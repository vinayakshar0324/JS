console.log(this);

var user = {
    firstname : "Hitesh",
    CourseCount : 4,
    getCourseCount : function(){
        console.log("LINE 7", this);
        function sayHello(){
            console.log("hello");
            console.log("LINE 10", this);
        }
        sayHello()
    },

};

user.getCourseCount();
