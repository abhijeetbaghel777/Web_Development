let obj={
    id:1,
    firstName:"om",
    lastName:"tiwari",
    fullName:function(city){
        console.log(this.firstName+this.lastName+city);
    }
}
let user={
    id:1,
    firstName:"ankit",
    lastName:"kumari"
}
//method sharing->using call keyword that  can be used to share the methods note:: the kye name should be same in both the objects
//
obj.fullName.call(user)// method sharing
obj.fullName.call(user,"bhopal")// bhopal will go as city
obj.fullName.apply(user,["bhopal"])// in apply it will go in form of array
