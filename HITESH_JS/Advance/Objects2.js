var User = {
    name: "",
    getUserName : function(){
        console.log(`User name is : ${this.name}`);
    },
};

var hitesh = Object.create(User);
