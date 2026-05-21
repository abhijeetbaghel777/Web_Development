fetch("https://dummyjson.com/products").
then((res)=>{
    return res.json()
}).then((data)=>{
   let body=   document.querySelector("body")
    // console.log(data.products[1].brand);
    data.products.map((a)=>{
        console.log(a);
        body.innerHTML+=`<div style="border:1px solid black;
           padding:20px;
           margin:40px;
           width:300px;
           border-radius:21px"> 
           <img src="${a.
            thumbnail}" width="100px">
            <h2>  ${a.title}</h2>
            <h3>  ${a.price}</h3>
            <button onclick="addtocart(${a.id})">Add to Cart</button>
            </div>
            
     `
      window.allP=data.products
    })
    
})
let cart=[]
function addtocart(id){
    console.log(id);
    let data=    window.allP.find((a)=>{
        return a.id==id


    })
    cart.push(data)
    console.log(data);
    localStorage.setItem("item",JSON.stringify(cart))
}
