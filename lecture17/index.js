import data from './new.js'// importing with default keyword
import {b} from './new.js'//importing without default keyword
// console.log(data)
// console.log(b)
// import {sum} from './new.js'
// sum(5,6)
// pure function->
/**Always returns the same output for the same input
Has no side effects (does not modify anything outside itself) */
 function double(num){
    return num*2;
 }
 console.log(double(5));
 console.log(double(5));

 //impure function->give diff value for same inputs in a function
 let count=0;
 function fun(){
    count++;
    return count;
 }
 function addn(b){
    return function(a){
        return function(c){
            return a+b+c;
        }
    }
 }
 console.log(addn(6)(7)(8))
 function sum(a){
    return function(b){
        if(b){
        return sum(a+b)
    }
    return a
    }
 }
 console.log(sum(1)(2)(3)(4)(5)())
 // spreading operators
 
 function msum(a,b,c,...nums){
    //console.log(arguments)
   // return a+b+c;
 }
 console.log(msum(5,4,5,6,43,5,6,4,4,5,4,3))
 let arrr = [1,2,3,4,5,6,7,8,9]
let [a,b,c,d,e,f,g,h] = arrr
console.log(a)
console.log(b)
console.log(c)
//---------------------------------------------------
let obj={
    id:1,
    name:"om",
}

let {id,name}=obj
console.log(id)