//shallow copy->ek he level tak copying limited rehti h or next evel me refrence jata h
//1.object refremce type hota hai.
// let obj={
//     id:1,
//     name:"omm",// 1st level
//     address:{
//         city:"delhi"//2nd level
//     }
// }
// let user={...obj}
// user.address.city="goa"// here we are accessing 2nd layer so the refrence will be passed in this case and both the fields will be changed 
// // jab bhi data jayega data change jayega
// user.name="abhay"
// console.log(user.name)
// console.log(obj.name)
// console.log(user.address.city)
// console.log(user.address.city)
//-----------------------
//2.deep copy-> now here agar kitne bhi level h deep copy me refrence nahi jayega but poora he copy ho jayega
let obj={
    id:1,
    name:"omm",// 1st level
    address:{
        city:"delhi"//2nd level
    }
}
let user=structuredClone(obj)// deep copy whole data of obj wiil copy in user irrespective of level
user.address.city="goa"
console.log(user.address.city)
console.log(obj.address.city)