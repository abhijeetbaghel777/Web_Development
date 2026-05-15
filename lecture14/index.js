let input=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.querySelector('#list');
// btn.addEventListener("click",()=>{
//     let data =input.value;
//     fetch(`https://api.tvmaze.com/search/shows?q=${data}`).
//     then((info)=>{
//         return info.json()
//     }).then((val)=>{
//         console.log(val[0].show.image.original);
//         show(val)
//     })
// })
// function show(val){
//     let img=document.createElement("img");
//     img.setAttribute("src",val[0].show.image.original)
//     list.appendChild(img)
// }
let apik='9f6290d6cda9a36a63755fadee71f83d'
btn.addEventListener("click",()=>{
    let data=input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiK}`).then((info)=>{
        return info.json();
    }).then((val)=>{
        console.log(val);

        
    })
})