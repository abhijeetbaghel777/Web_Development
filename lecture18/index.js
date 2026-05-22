let obj={
    id:1,
    name:"om"
}
let user=obj// here the refrence of the obj is passed to user so any change in user will coz change in obj as well
// this is call by refrence
user.name="hello"
console.log(obj.name)
console.log(user.name)



let obj1={
    id:2,
    name:"tanmay"
}
let user1={...obj1}// here all the data of obj1 is copied so no changes occur if there is change in one field
user1.name="hello"
console.log(user1.name)
console.log(obj1.name)

