var user = "testprep";

switch (user) {
    case "Admin":
        console.log("You get full acess");
        break;
    case "SubAdmin":
        console.log(" get  acess to create/delete courses");
        break;
    case "testprep":
        console.log("get acess to create/delete courses");
        break;
    case "user":
        console.log("get access to consume content")
        break;
default:
    console.log("Trail User")
        break;
}