function init(){
   var firstName = "hitesh";
   function sayFirstName(){
       console.log(this.firstName);
   }
    return  sayFirstName();

}

 init();

