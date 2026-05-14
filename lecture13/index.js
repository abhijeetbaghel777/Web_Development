const arr=[
    'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
    'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    
]
const imageel=document.querySelector('img');
let  num=0;
setInterval(function(){
    imageel.setAttribute('src',arr[num]);

    num=(num + 1)%arr.length;
},1000);
// setTimeout(()=>{
//     console.log("c")
// },10)
// setTimeout(()=>{
//     console.log("b")
// },0)
// console.log("a")
function step1(fn){
    setTimeout(() => {
        console.log("selectedddddd");
        fn()

    }, 5000);
}
function step2(fn){
    setTimeout(() => {
        console.log("filterrrrr");
        fn()
    }, 4000);
}
function step3(fn){
    setTimeout(() => {
        console.log("like");
        fn()
    }, 2000);
}
function step4(fn){
    setTimeout(() => {
        console.log("comment");
        fn()
    }, 1000);
}
step1(function(){
    step2(function(){
        step3(function(){
            step4()
        })
    })
})