var getUserRole = function(name , role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; // this is not neccesary
        case "Subadmin":
            return `${name} is Subadmin with access to create and delete course`
            break;
            case "testprep":
            return `${name} is testprep with access to create and delete tests`
            break;
        case "User":
            return `${name} is User to consume all content`
            break;
        default:
            return `${name} is a trail user`
            break;
    }
}

console.log(getUserRole("Hitesh", "testprep"));

var getRole = getUserRole("sammy", "User");











