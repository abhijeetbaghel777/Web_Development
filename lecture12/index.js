// let h1=document.querySelector("h1")//used to select elements
// //inner text->used to accese the data of any element and used to modify too
// console.log(h1.innerText)
let inp=document.querySelector("input")
let h1=document.querySelector("h1")
inp.addEventListener("input",(e)=>{
    console.log(e.target.value)
    h1.innerText=e.target.value
})