const Hitesh = {
    FirstName : "hitesh",
    lastName : "Choudhary",
    role: "admin",
    courseCount: 3,
    getInfo : function(){
        console.log(`
        First Name is ${this.FirstName} 
        last name is ${this.lastName}
        his role is ${this.role}
        and he is studying ${this.courseCount} courses `);
    },
};

const dj = {
    FirstName : "Rock",
    lastName: "Dj",
    role: "Sub-admin",
    courseCount: 4,
    
};

// hitesh.getInfo();


// hitesh.getInfo.bind(dj)();
var djInfo = hitesh.getInfo.bind();
djInfo();



